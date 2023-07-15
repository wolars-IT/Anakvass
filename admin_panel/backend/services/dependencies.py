from typing import AsyncGenerator
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from db.database import async_session
from services.repos import AdminRepo


async def get_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        yield session


async def get_admin_repo(
    session: AsyncSession = Depends(get_session)
) -> AdminRepo:
    return AdminRepo(session)
