from datetime import datetime
from schemas.order import Statuses

from sqlalchemy import String, Enum
from sqlalchemy.orm import (
    DeclarativeBase, Mapped, mapped_column
)
from sqlalchemy.dialects.mysql import INTEGER


class Base(DeclarativeBase):  # Defines as a class for type checkers
    pass


class Admin(Base):
    __tablename__ = 'admins'

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(
        String(25), unique=True, nullable=False
    )
    password: Mapped[str] = mapped_column(String(200), nullable=False)
    is_active: Mapped[bool] = mapped_column(default=True, nullable=False)
    last_login: Mapped[datetime] = mapped_column(nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        default=datetime.now(), nullable=False
    )


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
