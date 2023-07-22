from settings import settings

from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine


engine = create_async_engine(settings.db_url)
async_session = async_sessionmaker(engine, expire_on_commit=False)
