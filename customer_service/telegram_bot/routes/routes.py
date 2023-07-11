from fastapi import APIRouter, Request
import bot

router = APIRouter()


# order: {full_name, email, phone_number, address, box_count, comment}
@router.post("/")
async def read_order(request: Request):
    body = await request.json()
    await bot.send_notification(body)
    return {"status": 200}

