from fastapi import APIRouter, Request
from bot.bot import send_notification

router = APIRouter()


# order: {full_name, email, phone_number, address, box_count, comment}
@router.post("/")
async def read_order(order: Request):
    order = await order.json()
    return await send_notification(order)
