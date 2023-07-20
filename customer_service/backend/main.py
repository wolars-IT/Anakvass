from fastapi import FastAPI
from routes import routes


app = FastAPI(
    docs_url=None,
    redoc_url=None
)

app.include_router(routes.router)
