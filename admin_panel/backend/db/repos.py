from passlib.context import CryptContext
from sqlalchemy.ext.asyncio import AsyncSession

from models.models import Admin
from schemas.admin import AdminCreateSchema


class BaseRepo:
    def __init__(self, session: AsyncSession):
        self.session = session


class AdminRepo(BaseRepo):
    async def add(self, admin: AdminCreateSchema) -> None:
        crypt_context = CryptContext(schemes=["argon2"])
        hashed_password = crypt_context.hash(admin.password, scheme="argon2")

        self.session.add(Admin(
            username=admin.username,
            password=hashed_password,
            last_login=admin.last_login,
            created_at=admin.created_at
        ))

    async def get(self, admin_id: int) -> Admin | None:
        return await self.session.get(Admin, admin_id)
