from typing import AsyncGenerator
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from db.database import async_session
from db.repos import BaseRepo


async def get_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        yield session


class Repo:
    def __init__(self, repo: type[BaseRepo]):
        self.repo = repo

    def __call__(self, session: AsyncSession = Depends(get_session)) -> BaseRepo:
        return self.repo(session)
