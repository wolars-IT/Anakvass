from fastapi import APIRouter
from schemas.order import Order


router = APIRouter()


@router.post("/")
async def create_order(order: Order) -> dict[str, int]:
    pass
