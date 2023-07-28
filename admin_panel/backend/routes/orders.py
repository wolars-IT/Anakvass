from typing import Annotated
from fastapi import (
    APIRouter, Query,
    Depends, status
)

from schemas.order import OrderSchema, Statuses
from services.auth import get_current_admin
from services.order import OrderService

router = APIRouter(prefix="/orders", dependencies=[Depends(get_current_admin)])


@router.get("/")
async def read_orders(
    offset: Annotated[int, Query(ge=0)] = 0,
    limit: Annotated[int, Query(ge=1)] = 5,
    order_service: OrderService = Depends(OrderService)
) -> list[OrderSchema]:
    return await order_service.orders(offset, limit)


@router.get("/{order_id}")
async def read_order(
    order_id: int,
    order_service: OrderService = Depends(OrderService)
) -> OrderSchema:
    return await order_service.order(order_id)


@router.put("/{order_id}")  # FastAPI accepts order_status as a query parameter
async def update_order(
    order_id: int,
    order_status: Annotated[Statuses, Query(alias="status")],
    order_service: OrderService = Depends(OrderService)
):
    await order_service.change_status(order_id, order_status)


@router.delete("/{order_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_order(
    order_id: int,
    order_service: OrderService = Depends(OrderService)
):
    await order_service.delete(order_id)
