from os import getenv
from fastapi import (
    APIRouter, Depends, HTTPException,
    Request, Response
)

from schemas.admin import AdminSchema, AdminLoginSchema
from services.auth import AuthService

COOKIE_NAME = getenv("COOKIE_NAME", "sessionid")
COOKIE_AGE = getenv("COOKIE_AGE", 2592000)

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

    session_token = await auth_service.login(admin)
    response.set_cookie(COOKIE_NAME, session_token, max_age=COOKIE_AGE)


@router.post("/logout")
async def logout(
    request: Request,
    response: Response,
    auth_service: AuthService = Depends(AuthService)
):
    session_token = request.cookies.get(COOKIE_NAME)
    await auth_service.logout(session_token)
    response.delete_cookie(COOKIE_NAME)


@router.get("/current_user")
async def read_current_user(
    request: Request,
    auth_service: AuthService = Depends(AuthService)
) -> AdminSchema:
    session_token = request.cookies.get(COOKIE_NAME)
    admin = await auth_service.get_current_admin(session_token)

    if admin is None:
        raise HTTPException(
            status_code=403, detail="Access denied"
        )
    return admin
