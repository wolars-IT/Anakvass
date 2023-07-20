from schemas.order import Order as OrderSchema
from models.order import Order as OrderModel

from services.base import BaseCustomerService


class Customer(BaseCustomerService):
    async def send_order(self, order: OrderSchema) -> int:
        """Writes order to DB and return its ID"""
        new_order: OrderModel = await self.repo.add(order)
        await self.repo.session.commit()
        return new_order.id
