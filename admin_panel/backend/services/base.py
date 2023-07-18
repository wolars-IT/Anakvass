from db.repos import AdminRepo


class BaseAdminService:
    def __init__(self, repo: AdminRepo):
        self.repo = repo
