from bot.config import CHAT_ID, MESSAGE_TEMPLATE
from datetime import datetime
from os import environ
import aiohttp

REQUEST = f"https://api.telegram.org/bot{environ.get('TG_BOT_API_KEY')}/sendMessage"


async def send_notification(order):
    current_time = str(datetime.now().replace(microsecond=0))
    message = MESSAGE_TEMPLATE.format(**order, time=current_time)
    payload = {
        "chat_id": CHAT_ID,
        "text": message,
        "parse_mode": "HTML"
    }

    async with aiohttp.ClientSession() as session:
        async with session.post(REQUEST, data=payload) as response:
            data = await response.json()
            if response.status == 200:
                return {"status": 200, "message": message}
            return {"status": response.status, "message": data.get("description", "N/A")}
