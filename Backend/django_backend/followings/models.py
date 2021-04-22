from django.db import models
from profile.models import Profile
from post.models import Post


class Followings(models.Model):

    created_by = models.ForeignKey(
        Profile, related_name="following_created_by", on_delete=models.CASCADE)
    user = models.ForeignKey(
        Profile, related_name="following_user", on_delete=models.CASCADE)

    class Meta:

        db_table = "followings"
        unique_together = ('created_by', 'user')
