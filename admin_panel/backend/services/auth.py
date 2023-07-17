from passlib.context import CryptContext
from fastapi import Depends

from db.repos import AdminRepo
from db.dependencies import Repo
from schemas.admin import AdminSchema, AdminLoginSchema
from models.models import Admin


async def auth_admin(
    password: str,
    password_hash: str
) -> bool:
    crypt_context = CryptContext(schemes=["argon2"])
    return crypt_context.verify(password, password_hash)


async def get_current_admin(
    admin_repo: AdminRepo = Depends(Repo(AdminRepo))
) -> AdminSchema:
    """Returns current authenticated admin.
    Can be used by middlewares and routes.
    """
    session = _get_current_session()


async def set_current_session():
    pass


async def _get_current_session():
    """Returns object that contains admin_id"""
