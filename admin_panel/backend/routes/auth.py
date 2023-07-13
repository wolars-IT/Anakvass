from fastapi import APIRouter, status

router = APIRouter(prefix="/auth")


@router.post("/login")
async def login():
    pass


@router.post("/logout")
async def logout():
    pass


@router.get("/current_user")
async def read_current_user():
    pass
