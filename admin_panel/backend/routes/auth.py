from fastapi import APIRouter, Depends
from db.repos import AdminRepo
from db.dependencies import Repo

router = APIRouter(prefix="/auth")


@router.post("/login")
async def login():
    pass


@router.post("/logout")
async def logout():
    pass


@router.get("/current_user")
async def read_current_user(admin_repo: AdminRepo = Depends(Repo(AdminRepo))):
    pass
