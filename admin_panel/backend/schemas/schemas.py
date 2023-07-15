from datetime import datetime
from pydantic import (
    BaseModel, ConfigDict, constr
)


class Admin(BaseModel):
    id: int
    username: constr(max_length=25)
    last_login: datetime
    created_at: datetime
