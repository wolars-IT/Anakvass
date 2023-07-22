from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    db_url: str
    redis_url: str
    cookie_age: int = 2592000
    cookie_name: str = "sessionid"


settings = Settings()
