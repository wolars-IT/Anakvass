from sqlalchemy.ext.asyncio import AsyncSession

import models
import schemas


class BaseRepo:
    def __init__(self, session: AsyncSession):
        self.session = session


class CustomerRepo(BaseRepo):
    async def add(self, order: schemas.Order) -> models.Order:
        new_order = models.Order(
            **order.model_dump(),
            status=schemas.Statuses.New
        )
        self.session.add(new_order)
        return new_order
