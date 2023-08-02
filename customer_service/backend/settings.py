from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    db_url: str
    url: str = "http://localhost:8000"


settings = Settings()
