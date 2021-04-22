from django.db import models
from profile.models import Profile


class Post(models.Model):

    body = models.TextField()
    created_by = models.ForeignKey(
        Profile, related_name="post_created_by", on_delete=models.CASCADE)
    imageorvideo = models.TextField()
    source = models.TextField()
    date_created = models.DateTimeField()

    class Meta:
        verbose_name_plural = "Posts"
        db_table = "post"
