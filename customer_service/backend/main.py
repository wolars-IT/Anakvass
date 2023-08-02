from settings import settings

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import routes


app = FastAPI(
    docs_url=None,
    redoc_url=None
)

app.include_router(routes.router)

origins = [settings.url]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=[
        "Content-Type",
        "Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
    ],
)
