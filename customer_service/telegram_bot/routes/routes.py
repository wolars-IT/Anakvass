from fastapi.responses import JSONResponse
from fastapi import APIRouter
from bot.bot import send_notification
from pydantic import BaseModel

router = APIRouter()


class Order(BaseModel):
    full_name: str
    email: str
    phone_number: str
    address: str
    box_count: int
    comment: str


@router.post("/")
async def read_order(order: Order):
    data = await send_notification(order.dict())
    return JSONResponse(content=data, status_code=data.get("status", 500))
