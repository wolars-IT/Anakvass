from fastapi import APIRouter
from schemas.order import Order
from typing_extensions import TypedDict


router = APIRouter()


@router.post("/")
async def create_order(order: Order) -> TypedDict("order_id", {"id": int}):
    pass
