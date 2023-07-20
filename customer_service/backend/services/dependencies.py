from fastapi import Depends
from services.base import BaseCustomerService

from db.repos import CustomerRepo
from db.dependencies import Repo


class CustomerService:
    def __init__(self, service: type[BaseCustomerService]):
        self.service = service

    def __call__(self, repo: CustomerRepo = Depends(Repo(CustomerRepo))) -> BaseCustomerService:
        return self.service(repo)
