from fastapi import APIRouter, Depends, HTTPException

from db.repos import AdminRepo
from db.dependencies import Repo
from schemas.admin import AdminSchema, AdminLoginSchema

from services.auth import AuthService
from services.dependencies import AdminService

router = APIRouter(prefix="/auth")


@router.post("/login")
async def login(
    admin_login_data: AdminLoginSchema,
    auth_service: AuthService = Depends(AdminService(AuthService))
):
    admin = await auth_service.authenticate(admin_login_data)
    if admin is None:
        raise HTTPException(
            status_code=403, detail="Wrong username or password"
        )


@router.post("/logout")
async def logout():
    pass


@router.get("/current_user")
async def read_current_user(admin_repo: AdminRepo = Depends(Repo(AdminRepo))):
    pass
