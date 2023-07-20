from db.repos import CustomerRepo


class BaseCustomerService:
    def __init__(self, repo: CustomerRepo):
        self.repo = repo
