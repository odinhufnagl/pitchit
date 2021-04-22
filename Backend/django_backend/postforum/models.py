from django.db import models
from profile.models import Profile


class PostForum(models.Model):
    title = models.TextField()
    body = models.TextField()
    created_by = models.ForeignKey(
        Profile, related_name="post_forum_created_by", on_delete=models.CASCADE)
    date_created = models.DateTimeField()

    class Meta:
        verbose_name_plural = "PostsForum"
        db_table = "postforum"
