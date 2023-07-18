from fastapi import Depends
from services.base import BaseAdminService

from db.repos import AdminRepo
from db.dependencies import Repo

from services.base import BaseAdminService


class AdminService:
    def __init__(self, service: type[BaseAdminService]):
        self.service = service

    def __call__(
        self, repo: AdminRepo = Depends(Repo(AdminRepo))
    ) -> BaseAdminService:
        return self.service(repo)
