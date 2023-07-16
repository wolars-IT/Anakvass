from sqlalchemy.ext.asyncio import AsyncSession
from schemas.admin import Admin


class BaseRepo:
    def __init__(self, session: AsyncSession):
        self.session = session


class AdminRepo(BaseRepo):
    async def add(self, admin: Admin):
        pass

    async def get(self, admin_id: int):
        pass
