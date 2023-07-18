from os import environ

from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine


DB_URL = environ["DB_URL"]

engine = create_async_engine(DB_URL)
async_session = async_sessionmaker(engine, expire_on_commit=False)
