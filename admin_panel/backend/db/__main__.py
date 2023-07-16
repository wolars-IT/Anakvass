import sys
import asyncio

from models.models import Base
from schemas.admin import AdminCreate

from db.database import engine, async_session
from db.repos import AdminRepo


async def init_db() -> None:
    """Temporary function to initialize tables,
    will be replaced with alembic"""

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def create_admin():
    admin_username = sys.argv[1]
    admin_password = sys.argv[2]

    async with async_session() as session:
        admin_repo = AdminRepo(session)
        await admin_repo.add(AdminCreate(
            username=admin_username,
            password=admin_password
        ))
        await session.commit()


if len(sys.argv) == 2 and sys.argv[1] == "init":
    asyncio.run(init_db())
else:
    asyncio.run(create_admin())
