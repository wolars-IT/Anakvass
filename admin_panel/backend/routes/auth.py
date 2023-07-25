from fastapi import (
    APIRouter, Depends, HTTPException,
    Request, Response
)

from models.models import Admin
from schemas.admin import AdminSchema, AdminСredentialsSchema
from services.auth import AuthService, get_current_admin

router = APIRouter(prefix="/auth")


@router.post("/login")
async def login(
    request: Request,
    response: Response,
    admin_login_data: AdminСredentialsSchema,
    auth_service: AuthService = Depends(AuthService),
):
    current_admin = await auth_service.get_current_admin(request)
    if current_admin is not None:
        raise HTTPException(
            status_code=403, detail="You are already logged in"
        )

    admin = await auth_service.authenticate(admin_login_data)
    if admin is None:
        raise HTTPException(
            status_code=403, detail="Wrong username or password"
        )
    elif not admin.is_active:
        raise HTTPException(
            status_code=403, detail="Your account was deactivated"
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
