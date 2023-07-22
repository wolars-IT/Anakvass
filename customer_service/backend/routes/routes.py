from fastapi import APIRouter
from fastapi import Depends

from typing_extensions import TypedDict

from schemas.order import Order

from services.customer import Customer

router = APIRouter()


@router.post("/")
async def create_order(
        order: Order,
        customer: Customer = Depends(Customer)
) -> TypedDict("order_id", {"id": int}):
    order_id = await customer.send_order(order)
    return {"id": order_id}
