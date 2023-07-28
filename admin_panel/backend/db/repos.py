from passlib.context import CryptContext

from sqlalchemy import select, update
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Depends

from db.database import get_session
from models.models import Admin
from schemas.admin import AdminСredentialsSchema


class BaseRepo:
    def __init__(self, session: AsyncSession = Depends(get_session)):
        self.session = session


class BaseUserRepo(BaseRepo):
    def __init__(self, session: AsyncSession = Depends(get_session)):
        super().__init__(session)
        self.hash_manager = CryptContext(schemes=["argon2"])


class AdminRepo(BaseUserRepo):
    async def add(self, admin: AdminСredentialsSchema) -> None:
        hashed_password = self.hash_manager.hash(admin.password)
        self.session.add(Admin(
            username=admin.username,
            password=hashed_password,
        ))

    async def get(self, admin_id: int) -> Admin | None:
        return await self.session.get(Admin, admin_id)

    async def get_by_username(self, admin_username: str) -> Admin | None:
        stmt = select(Admin).where(Admin.username == admin_username)
        return await self.session.scalar(stmt)

    async def update(self, admin: Admin, **kwargs) -> None:
        stmt = update(Admin).where(Admin.id == admin.id).values(**kwargs)
        await self.session.execute(stmt)
