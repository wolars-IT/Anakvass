from typing import Sequence
from fastapi import Depends, HTTPException

from db.repos import OrderRepo
from schemas.order import Statuses
from models.models import Order


class OrderService:
    def __init__(self, repo: OrderRepo = Depends(OrderRepo)):
        self.repo = repo

    async def order(self, order_id: int) -> Order:
        order = await self.repo.get(order_id)
        if order is None:
            raise HTTPException(404, detail="Order not found")
        return order

    async def orders(self, offset: int, limit: int) -> Sequence[Order]:
        return await self.repo.list(offset, limit)

    async def change_status(
        self, order_id: int, order_status: Statuses
    ) -> None:
        order = await self.repo.get(order_id)
        if order is None:
            raise HTTPException(404, detail="Order not found")

        await self.repo.update(order, order_status)
        await self.repo.session.commit()

    async def delete(self, order_id: int) -> None:
        order = await self.repo.get(order_id)
        if order is None:
            raise HTTPException(404, detail="Order not found")

        await self.repo.delete(order)
        await self.repo.session.commit()
