from enum import Enum
from pydantic import (
    BaseModel, ConfigDict,
    constr, conint,
    field_validator
)


class Statuses(Enum):
    New = "New"
    Hot = "Hot"
    Sending = "Sending"
    Done = "Done"
    Frozen = "Frozen"


class Order(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    full_name: constr(min_length=8, max_length=255)
    email: constr(min_length=8, max_length=320)
    phone_number: constr(min_length=6, max_length=15)
    address: constr(min_length=12, max_length=425)
    box_count: conint(gt=0, lt=(2**32))
    comment: constr(min_length=1, max_length=255)

    @field_validator("full_name")
    def full_name_validator(cls, value):
        value = value.strip()
        if value.count(" ") < 1:
            raise ValueError("Wrong full name format: Full name must contain at least 1 space")
        return value

    @field_validator("email")
    def email_validator(cls, value):
        value = value.strip()
        string = value
        value = value.split("@")
        if len(value) != 2:
            raise ValueError("Wrong email format: email address must have 2 parts separated by \"@\"")
        return string

    @field_validator("phone_number")
    def phone_number_validator(cls, value):
        value = "".join(filter(lambda x: x.isdigit(), value.strip()))
        if len(value) < 6:
            raise ValueError("Wrong phone number format: Phone number must be greater than 6 digits")
        return value

    @field_validator("address")
    def address_validator(cls, value):
        value = value.strip()
        if value.count(", ") != 4:
            raise ValueError("Wrong address format: Address must contain 4 separators (\", \")")
        if not value.split(", ")[-1].isdigit():
            raise ValueError("Wrong address format: Wrong zip code: zip code must be a number")
        return value

    @field_validator("comment")
    def comment_validator(cls, value):
        return value.strip()
