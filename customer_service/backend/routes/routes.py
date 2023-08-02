from fastapi import APIRouter, Depends
from typing_extensions import TypedDict
from schemas.order import Order
from services.customer import Customer


router = APIRouter()


@router.post("/")
async def create_order(
        order: Order,
        customer: Customer = Depends(Customer)
) -> TypedDict("Order ID", {"order_id": int}):
    order_id = await customer.send_order(order)
    return {"order_id": order_id}
