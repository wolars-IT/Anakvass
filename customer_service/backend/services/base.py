from fastapi import Depends

from db.repos import CustomerRepo


class BaseCustomerService:
    def __init__(self, repo: CustomerRepo = Depends(CustomerRepo)):
        self.repo = repo
