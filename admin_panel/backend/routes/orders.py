from typing import List
from fastapi import APIRouter, status

router = APIRouter(prefix="/orders")


@router.get("/", status_code=status.HTTP_200_OK)
async def read_orders(offset: int = 0, limit: int = 5):
    pass


@router.get("/{order_id}", status_code=status.HTTP_200_OK)
async def read_order(order_id):
    pass


@router.delete("/{order_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_order(order_id):
    pass
