from django.db import models
from profile.models import Profile
from postforum.models import PostForum


class PostForumLikes(models.Model):

    created_by = models.ForeignKey(
        Profile, related_name="like_post_forum_created_by", on_delete=models.CASCADE)
    post_forum_id = models.ForeignKey(
        PostForum, related_name="like_post_forum_id", on_delete=models.CASCADE)

    class Meta:

        db_table = "postforumlike"
        unique_together = ('created_by', 'post_forum_id')
