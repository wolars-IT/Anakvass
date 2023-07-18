from typing import Optional

from datetime import datetime
from pydantic import BaseModel, constr


class AdminSchema(BaseModel):
    id: int
    username: constr(max_length=25)
    last_login: Optional[datetime]
    created_at: datetime


class AdminCreateSchema(BaseModel):
    username: constr(max_length=25)
    password: constr(max_length=200)


class AdminLoginSchema(BaseModel):
    username: constr(max_length=25)
    password: constr(max_length=200)
