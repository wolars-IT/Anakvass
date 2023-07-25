import sys
import asyncio

from models.models import Base
from schemas.admin import AdminCreateSchema

from db.database import engine, async_session
from db.repos import AdminRepo


async def init_db() -> None:
    """Temporary function to initialize tables,
    will be replaced with alembic"""

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def create_admin(username: str, password: str):
    async with async_session() as session:
        admin_repo = AdminRepo(session)
        await admin_repo.add(AdminCreateSchema(
            username=username,
            password=password
        ))
        await session.commit()


args = sys.argv[1:]  # Remove file name from the arguments
match args:
    case ['init']:
        asyncio.run(init_db())
    case [username, password]:
        asyncio.run(create_admin(username, password))
    case _:
        print(
            "Wrong command arguments. Allowed arguments:\n"
            "init - Initalize database\n"
            "<username> <password> - Create a new admin "
            "with the specified credentials\n\n"
            "Example: python -m db <username> <password>\n"
        )
