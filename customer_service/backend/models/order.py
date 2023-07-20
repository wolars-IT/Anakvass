from schemas.order import Statuses

from sqlalchemy import String, Enum
from sqlalchemy.orm import (
    DeclarativeBase, Mapped, mapped_column
)
from sqlalchemy.dialects.mysql import INTEGER


class Base(DeclarativeBase):
    pass


class Order(Base):
    __tablename__ = "orders"

    id: Mapped[int]           = mapped_column(primary_key=True)
    full_name: Mapped[str]    = mapped_column(String(125), nullable=False)
    email: Mapped[str]        = mapped_column(String(320), nullable=False)
    phone_number: Mapped[str] = mapped_column(String(15), nullable=False)
    address: Mapped[str]      = mapped_column(String(425), nullable=False)
    box_count: Mapped[str]    = mapped_column(INTEGER(unsigned=True), nullable=False)
    comment: Mapped[str]      = mapped_column(String(255), nullable=True)
    status: Mapped[Statuses]  = mapped_column(Enum(Statuses), nullable=False)
