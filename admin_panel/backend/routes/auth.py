from fastapi import (
    APIRouter, Depends, HTTPException,
    Request, Response
)

from models.models import Admin
from schemas.admin import AdminSchema, AdminLoginSchema
from services.auth import AuthService, get_current_admin

router = APIRouter(prefix="/auth")


@router.post("/login")
async def login(
    response: Response,
    admin_login_data: AdminLoginSchema,
    auth_service: AuthService = Depends(AuthService),
):
    admin = await auth_service.authenticate(admin_login_data)
    if admin is None:
        raise HTTPException(
            status_code=403, detail="Wrong username or password"
        )

    await auth_service.login(admin, response)


@router.post("/logout")
async def logout(
    request: Request,
    response: Response,
    auth_service: AuthService = Depends(AuthService)
):
    await auth_service.logout(request, response)


@router.get("/current_user")
async def read_current_user(
    current_admin: Admin = Depends(get_current_admin)
) -> AdminSchema:
    return current_admin
