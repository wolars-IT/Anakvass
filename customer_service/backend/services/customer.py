from fastapi import Depends

from db.repos import CustomerRepo
from schemas.order import Order as OrderSchema
from models.order import Order as OrderModel


class Customer:
    def __init__(self, repo: CustomerRepo = Depends(CustomerRepo)):
        self.repo = repo

    async def send_order(self, order: OrderSchema) -> int:
        """Writes order to DB and return its ID"""
        new_order: OrderModel = await self.repo.add(order)
        await self.repo.session.commit()
        return new_order.id
