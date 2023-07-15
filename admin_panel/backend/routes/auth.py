from fastapi import APIRouter, Depends
from services.repos import AdminRepo
from services.dependencies import get_admin_repo

router = APIRouter(prefix="/auth")


@router.post("/login")
async def login():
    pass


@router.post("/logout")
async def logout():
    pass


@router.get("/current_user")
async def read_current_user(admin_repo: AdminRepo = Depends(get_admin_repo)):
    pass
