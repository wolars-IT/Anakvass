from fastapi import APIRouter, Depends, HTTPException

from db.repos import AdminRepo
from db.dependencies import Repo
from schemas.admin import AdminSchema, AdminLoginSchema

from services.auth import auth_admin, get_current_admin

router = APIRouter(prefix="/auth")


@router.post("/login")
async def login(
    admin_login_data: AdminLoginSchema,
    admin_repo: AdminRepo = Depends(Repo(AdminRepo))
):
    admin = await admin_repo.get_by_username(admin_login_data.username)

    if admin is None or not await auth_admin(
        admin_login_data.password, admin.password
    ):
        raise HTTPException(
            status_code=403, detail="Wrong username or password"
        )


@router.post("/logout")
async def logout():
    pass


@router.get("/current_user")
async def read_current_user(admin_repo: AdminRepo = Depends(Repo(AdminRepo))):
    pass
