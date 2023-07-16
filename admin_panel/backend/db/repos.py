from sqlalchemy.ext.asyncio import AsyncSession
from models import models
from schemas.admin import Admin, AdminCreate


class BaseRepo:
    def __init__(self, session: AsyncSession):
        self.session = session


class AdminRepo(BaseRepo):
    async def add(self, admin: AdminCreate) -> None:
        self.session.add(models.Admin(**admin.model_dump()))

    async def get(self, admin_id: int):
        pass
