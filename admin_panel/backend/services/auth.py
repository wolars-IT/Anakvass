from fastapi import Depends

from db.repos import AdminRepo
from db.dependencies import Repo

from schemas.admin import AdminLoginSchema
from models.models import Admin

from services.base import BaseAdminService


class AuthService(BaseAdminService):
    async def authenticate(
        self, admin_login_data: AdminLoginSchema
    ) -> Admin | None:
        """Verifies admin password, saves admin session in the database"""
        admin = await self.repo.get_by_username(admin_login_data.username)

        if admin is None:
            return None
        if not self.repo.hash_manager.verify(
            admin_login_data.password, admin.password
        ):
            return None

        return admin

    async def login(self):
        """Sets session of the authenticated admin, adds it to the headers"""

    async def get_current_admin(
        self, admin_repo: AdminRepo = Depends(Repo(AdminRepo))
    ) -> Admin:
        """Returns current authenticated admin.
        Can be used by middlewares and routes.
        """
        session = self._get_current_session()

    async def _set_current_session(self):
        pass

    async def _get_current_session(self):
        """Returns object that contains admin_id"""
