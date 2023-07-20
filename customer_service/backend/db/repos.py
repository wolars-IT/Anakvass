from sqlalchemy.ext.asyncio import AsyncSession

from models.order import Order as OrderModel
from schemas.order import Order as OrderSchema, Statuses


class BaseRepo:
    def __init__(self, session: AsyncSession):
        self.session = session


class CustomerRepo(BaseRepo):
    async def add(self, order: OrderSchema) -> OrderModel:
        new_order = OrderModel(
            **order.model_dump(),
            status=Statuses.New
        )
        self.session.add(new_order)
        return new_order
