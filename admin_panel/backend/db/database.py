from typing import AsyncGenerator
from settings import settings

from sqlalchemy.ext.asyncio import (
    AsyncSession, async_sessionmaker,
    create_async_engine
)

engine = create_async_engine(settings.db_url)
async_session = async_sessionmaker(engine, expire_on_commit=False)


async def get_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        yield session
