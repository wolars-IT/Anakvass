import secrets
from settings import settings

from redis.asyncio.client import Redis
from fastapi import (
    Depends, HTTPException,
    Request, Response
)

from db.repos import AdminRepo

from schemas.admin import AdminLoginSchema
from models.models import Admin

from services.base import BaseAdminService
from services.dependencies import get_redis


class AuthService(BaseAdminService):
    def __init__(
        self,
        repo: AdminRepo = Depends(AdminRepo),
        redis: Redis = Depends(get_redis)
    ):
        super().__init__(repo)
        self.redis = redis
        self.cookie_name = settings.cookie_name
        self.cookie_age = settings.cookie_age

    async def authenticate(
        self, admin_login_data: AdminLoginSchema
    ) -> Admin | None:
        """Verifies admin password"""
        admin = await self.repo.get_by_username(admin_login_data.username)

        if admin is None:
            return None
        if not self.repo.hash_manager.verify(
            admin_login_data.password, admin.password
        ):
            return None

        return admin

    async def login(self, admin: Admin, response: Response) -> None:
        """Saves session in the database, sets cookies"""
        session_token = secrets.token_urlsafe()
        await self.redis.set(session_token, admin.id, ex=self.cookie_age)
        response.set_cookie(
            self.cookie_name,
            session_token,
            max_age=self.cookie_age
        )

    async def logout(self, request: Request, response: Response) -> None:
        session_token = request.cookies.get(self.cookie_name)

        if session_token is not None:
            await self.redis.delete(session_token)
            response.delete_cookie(self.cookie_name)

    async def _get_current_admin(self, request: Request) -> Admin | None:
        """Returns current authenticated admin"""
        session_token = request.cookies.get(self.cookie_name)
        if session_token is None:
            return None

        admin_id = await self.redis.get(session_token)
        if admin_id is None:
            return None

        return await self.repo.get(admin_id)


async def get_current_admin(
    request: Request,
    auth_service: AuthService = Depends(AuthService)
) -> Admin:
    admin = await auth_service._get_current_admin(request)
    if admin is None:
        raise HTTPException(
            status_code=403, detail="Access denied"
        )
    return admin
