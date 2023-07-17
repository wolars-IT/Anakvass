from datetime import datetime
from pydantic import BaseModel, constr


class AdminBaseSchema(BaseModel):
    username: constr(max_length=25)


class AdminSchema(AdminBaseSchema):
    id: int
    last_login: datetime
    created_at: datetime


class AdminCreateSchema(AdminBaseSchema):
    password: constr(max_length=200)
    last_login: datetime = datetime.now()
    created_at: datetime = datetime.now()


class AdminLoginSchema(AdminBaseSchema):
    password: constr(max_length=200)
