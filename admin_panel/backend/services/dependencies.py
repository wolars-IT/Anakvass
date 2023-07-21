from typing import AsyncGenerator
from os import environ

import redis.asyncio as redis
from redis.asyncio.client import Redis


REDIS_URL = environ["REDIS_URL"]


async def get_redis() -> AsyncGenerator[Redis, None]:
    connection = await redis.from_url(REDIS_URL)
    yield connection
    await connection.close()
