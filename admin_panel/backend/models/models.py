from datetime import datetime

from sqlalchemy import String
from sqlalchemy.orm import (
    DeclarativeBase, Mapped, mapped_column
)


class Base(DeclarativeBase):  # Defines as a class for type checkers
    pass


class Admin(Base):
    __tablename__ = 'admins'

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(25), unique=True)
    password: Mapped[str] = mapped_column(String(200))
    is_active: Mapped[bool] = mapped_column(default=True)
    last_login: Mapped[datetime] = mapped_column(nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        default=datetime.now(), nullable=False
    )
