from enum import Enum
from pydantic import BaseModel, constr, conint


class Statuses(Enum):
    New = "New"
    Hot = "Hot"
    Sending = "Sending"
    Done = "Done"
    Frozen = "Frozen"


class OrderSchema(BaseModel):
    id: int
    full_name: constr(min_length=8, max_length=255)
    email: constr(min_length=8, max_length=320)
    phone_number: constr(min_length=6, max_length=15)
    address: constr(min_length=12, max_length=425)
    box_count: conint(gt=0, lt=(2**32))
    comment: constr(min_length=1, max_length=255) | None
    status: Statuses
