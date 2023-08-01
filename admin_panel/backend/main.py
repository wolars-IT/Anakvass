from settings import settings

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import auth, orders

app = FastAPI()

app.include_router(auth.router)
app.include_router(orders.router)

origins = [
    settings.url,
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allow_headers=[
        "Content-Type", "Set-Cookie",
        "Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
    ],
)
