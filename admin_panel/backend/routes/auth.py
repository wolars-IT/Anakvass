from fastapi import APIRouter, status

router = APIRouter(prefix="/auth")


@router.post("/login", status_code=status.HTTP_200_OK)
async def login():
    pass


@router.post("/logout", status_code=status.HTTP_200_OK)
async def logout():
    pass


@router.get("/current_user", status_code=status.HTTP_200_OK)
async def read_current_user():
    pass
