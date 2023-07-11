from bot.config import CHAT_ID, MESSAGE_TEMPLATE
from datetime import datetime
from os import environ
import aiohttp

REQUEST = f"https://api.telegram.org/bot{environ.get('TG_BOT_API_KEY')}/sendMessage"


async def send_notification(order):
    order.update({"time": datetime.now()})
    message = MESSAGE_TEMPLATE.format(order)

    async with aiohttp.ClientSession() as session:
        async with session.post(REQUEST, data={
            'chat_id': CHAT_ID,
            'text': message,
            'parse_mode': "Markdown"
        }) as response:
            if response.status == 200:
                print("Success!")
            else:
                print("Fail. Code:", response.status)

