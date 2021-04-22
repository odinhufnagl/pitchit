from django.db import models
from profile.models import Profile
from post.models import Post


class PostLikes(models.Model):

    created_by = models.ForeignKey(
        Profile, related_name="like_created_by", on_delete=models.CASCADE)
    post_id = models.ForeignKey(
        Post, related_name="like_post_id", on_delete=models.CASCADE)

    class Meta:

        db_table = "postlike"
        unique_together = ('created_by', 'post_id')
