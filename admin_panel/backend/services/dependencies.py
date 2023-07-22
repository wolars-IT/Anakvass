from typing import AsyncGenerator
from settings import settings

import redis.asyncio as redis
from redis.asyncio.client import Redis


async def get_redis() -> AsyncGenerator[Redis, None]:
    connection = await redis.from_url(settings.redis_url)
    yield connection
    await connection.close()
