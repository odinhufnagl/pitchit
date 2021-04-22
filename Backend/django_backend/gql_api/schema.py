import graphene
from django.db import models


from graphene_django.types import DjangoObjectType
from graphql_auth import mutations
from post.models import Post
from postforum.models import PostForum
from postforumlikes.models import PostForumLikes
from postforumcomments.models import PostForumComments
from profile.models import Profile
from django.contrib.auth.models import User
from postlikes.models import PostLikes
from postcomments.models import PostComments
from followings.models import Followings
from datetime import datetime
from math import cos, asin, sqrt, pi
# this is what we define SCHEMA in settings.py


def distance(lat1, lon1, lat2, lon2):

    p = pi/180
    a = 0.5 - cos((lat2-lat1)*p)/2 + cos(lat1*p) * \
        cos(lat2*p) * (1-cos((lon2-lon1)*p))/2
    print(12742 * asin(sqrt(a)), lat1, lon1, lat2, lon2)
    return 12742 * asin(sqrt(a))


class PostType(DjangoObjectType):

    class Meta:
        model = Post


class PostForumType(DjangoObjectType):

    class Meta:
        model = PostForum


class PostForumLikesType(DjangoObjectType):

    class Meta:
        model = PostForumLikes


class PostForumCommentsType(DjangoObjectType):

    class Meta:
        model = PostForumComments


class ProfileType(DjangoObjectType):
    class Meta:
        model = Profile


class UserType(DjangoObjectType):

    class Meta:
        model = User


class PostLikesType(DjangoObjectType):

    class Meta:
        model = PostLikes


class PostCommentsType(DjangoObjectType):

    class Meta:
        model = PostComments


class FollowingsType(DjangoObjectType):

    class Meta:
        model = Followings


class Query(graphene.ObjectType):

    post_list = graphene.List(PostType)

    def resolve_post_list(self, info, *_):
        try:
            return reversed(Post.objects.all())
        except:
            return None
    # ---

    post_list_filtered = graphene.List(
        PostType, created_by=graphene.Int(), cur_user_id=graphene.Int(), start=graphene.Int(), end=graphene.Int())

    def resolve_post_list_filtered(self, info, *_, created_by=None, cur_user_id=None, start, end):
        if cur_user_id == None and created_by != None:
            try:
                profile = Profile.objects.get(id=created_by)
                post_list_filtered_instance = Post.objects.filter(
                    created_by=profile).order_by('date_created')

                post_list_filtered_instance = post_list_filtered_instance.reverse()
                return post_list_filtered_instance[start: end]
            except:
                return None

        elif cur_user_id != None and created_by == None:
            try:
                post_list_instance = Post.objects.all().exclude(created_by=cur_user_id).reverse()

                return post_list_instance[start: end]
            except:
                return None

    post_list_following = graphene.List(
        PostType, cur_user_id=graphene.Int(), start=graphene.Int(), end=graphene.Int())

    def resolve_post_list_following(self, info, *_, cur_user_id, start, end):
        try:
            print(start, end)
            profile = Profile.objects.get(id=cur_user_id)
            followings = Followings.objects.filter(created_by=profile)
            post_list_instance = Post.objects.none()

            for x in followings:

                post_list_instance = post_list_instance.union(
                    Post.objects.filter(created_by=x.user))
            post_list_instance = post_list_instance.union(
                Post.objects.filter(created_by=cur_user_id))
            post_list_instance = post_list_instance.order_by(
                'date_created').reverse()

            return post_list_instance[start: end]

        except:
            return None

    post = graphene.Field(PostType, id=graphene.Int())

    def resolve_post(self, info, id):

        try:
            post_queryset = Post.objects.get(id=id)
            return post_queryset
        except:
            return None
    # ---

    post_forum_list_filtered = graphene.List(
        PostForumType, created_by=graphene.Int(), cur_user_id=graphene.Int(), start=graphene.Int(), end=graphene.Int())

    def resolve_post_forum_list_filtered(self, info, *_, created_by=None, cur_user_id=None, start, end):
        if cur_user_id == None and created_by != None:
            try:
                user = User.objects.get(id=created_by)
                post_list_filtered_instance = PostForum.objects.filter(
                    created_by=user.profile).order_by('date_created')

                post_list_filtered_instance = post_list_filtered_instance.reverse()
                return post_list_filtered_instance[start: end]
            except:
                return None

        elif cur_user_id != None and created_by == None:
            try:
                user = User.objects.get(id=cur_user_id)
                post_list_instance = PostForum.objects.all().exclude(
                    created_by=user.profile).reverse()

                return post_list_instance[start: end]
            except:
                return None

    post_forum_list_latest = graphene.List(
        PostForumType, start=graphene.Int(), end=graphene.Int())

    def resolve_post_forum_list_latest(self, info, start, end):
        try:
            return PostForum.objects.order_by('date_created')[start: end]
        except:
            return None

    post_forum_list_mostliked = graphene.List(
        PostForumType, start=graphene.Int(), end=graphene.Int())

    def resolve_post_forum_list_mostliked(self, info, start, end):
        try:
            return sorted(PostForum, key=lambda x: len(x.likePostForumId))
        except:
            return None

    post_forum_list_mostanswers = graphene.List(
        PostForumType, start=graphene.Int(), end=graphene.Int())

    def resolve_post_forum_list_mostanswers(self, info, start, end):

        for x in PostForum.objects.all():

            print(x.comment_post_forum_id.all())
        return reversed(sorted(PostForum.objects.all(), key=lambda x: len(x.comment_post_forum_id.all())))

    post_forum_list_following = graphene.List(
        PostForumType, cur_user_id=graphene.Int(), start=graphene.Int(), end=graphene.Int())

    def resolve_post_forum_list_following(self, info, cur_user_id, start, end):

        try:
            user = User.objects.get(id=cur_user_id)
            followings = Followings.objects.filter(created_by=user.profile)
            post_list_instance = PostForum.objects.none()

            for x in followings:

                post_list_instance = post_list_instance.union(
                    PostForum.objects.filter(created_by=x.user))

            post_list_instance = post_list_instance.order_by(
                'date_created').reverse()
            return post_list_instance[start: end]

        except:
            return None

    user = graphene.Field(UserType, id=graphene.Int(),
                          username=graphene.String())

    def resolve_user(self, info, id=None, username=None):
        if username == None:
            try:

                profile_queryset = User.objects.get(id=id)
                return profile_queryset
            except:
                return None
        elif id == None:
            try:
                profile_queryset = User.objects.get(username=username)
                return profile_queryset
            except:
                return None

    # ---

    user_list = graphene.List(
        UserType, cur_user_id=graphene.Int(), start=graphene.Int(), end=graphene.Int(), search_word=graphene.String())

    def resolve_user_list(self, info, *_, cur_user_id=None, start=None, end=None, search_word=None):

        if search_word != None:
            print(start, end, search_word)
            try:
                if search_word == "":
                    return User.objects.all().exclude(id=cur_user_id)[0: end]
                print(search_word)
                print(User.objects.all())
                return User.objects.filter(username__icontains=search_word).exclude(id=cur_user_id)[0: end]
            except:
                return None
        elif cur_user_id == None:
            try:
                return User.objects.all()[start: end]
            except:
                return None

        elif cur_user_id != None:
            try:
                return User.objects.all().exclude(id=cur_user_id)[start: end]
            except:
                return None

    # ---

    user_list_by_location = graphene.List(UserType, cur_longitude=graphene.Float(
    ), cur_latitude=graphene.Float(), cur_user_id=graphene.Int(), start=graphene.Int(), end=graphene.Int())

    def resolve_user_list_by_location(self, info, *_, cur_longitude, cur_latitude, cur_user_id, start, end):
        try:
            all_users = User.objects.all().exclude(id=cur_user_id)
            print(all_users.first().profile.location_longitude)
            print(all_users, cur_longitude, cur_latitude)

            all_users = sorted(all_users, key=lambda x: distance(
                cur_latitude, cur_longitude, x.profile.location_latitude, x.profile.location_longitude))

            print(all_users)
            return all_users[start: end]
        except:
            return None

    post_likes_list = graphene.List(
        PostLikesType, post_id=graphene.Int(), created_by=graphene.Int(), userLiked=graphene.Int())

    # userliked hittar alla likes som varit på någon bild av userLiked
    def resolve_post_likes_list(self, info, post_id=None, created_by=None, userLiked=None):
        if userLiked != None:
            posts_by_user = Post.objects.filter(created_by=userLiked)

            all_likes_instance = PostComments.objects.none()
            for x in posts_by_user:

                all_likes_instance = all_likes_instance.union(
                    PostLikes.objects.filter(post_id=x.id))
            return all_likes_instance

        elif created_by == None:
            try:

                post_likes_queryset = PostLikes.objects.filter(
                    post_id=post_id)
                return post_likes_queryset
            except:
                return None
        else:
            try:

                post_likes_queryset = PostLikes.objects.filter(
                    post_id=post_id, created_by=created_by)
                return post_likes_queryset
            except:
                return None

    # ---

    post_comments_list = graphene.List(
        PostCommentsType, post_id=graphene.Int())

    def resolve_post_comments_list(self, info, post_id):

        try:
            post_comments_queryset = PostComments.objects.filter(
                post_id=post_id)
            return post_comments_queryset
        except:
            return None

    followings_list = graphene.List(
        FollowingsType, created_by=graphene.Int(), user=graphene.Int())

    def resolve_followings_list(self, info, created_by=None, user=None):
        if created_by == None:
            try:
                followings_list_queryset = Followings.objects.filter(user=user)
                return followings_list_queryset
            except:
                return None
        if user == None:
            try:
                followings_list_queryset = Followings.objects.filter(
                    created_by=created_by)
                return followings_list_queryset
            except:
                return None
        try:
            followings_list_queryset = Followings.objects.filter(
                created_by=created_by, user=user)
            return followings_list_queryset
        except:
            return None


class LikeInput(graphene.InputObjectType):
    id = graphene.ID()
    post_id = graphene.Int()
    created_by = graphene.Int()


class CreateLike(graphene.Mutation):
    class Arguments:
        input = LikeInput(required=True)

    like = graphene.Field(PostLikesType)

    @ staticmethod
    def mutate(root, info, input=None):
        profile = Profile.objects.get(id=input.created_by)
        post = Post.objects.get(id=input.post_id)
        postlikes_instance = PostLikes(
            post_id=post, created_by=profile)
        postlikes_instance.save()
        return CreateLike(like=postlikes_instance)


class DeleteLike(graphene.Mutation):
    class Arguments:
        input = LikeInput(required=True)

    like = graphene.List(PostLikesType)

    @ staticmethod
    def mutate(root, info, input=None):
        profile = Profile.objects.get(id=input.created_by)
        post = Post.objects.get(id=input.post_id)

        postlikes_instance = PostLikes.objects.filter(
            post_id=post, created_by=profile)
        postlikes_instance.delete()
        return DeleteLike(like=postlikes_instance)


class CommentInput(graphene.InputObjectType):
    id = graphene.ID()
    post_id = graphene.Int()
    created_by = graphene.Int()
    content = graphene.String()


class CreateComment(graphene.Mutation):
    class Arguments:
        input = CommentInput(required=True)

    comment = graphene.Field(PostCommentsType)

    @ staticmethod
    def mutate(root, info, input=None):
        profile = Profile.objects.get(id=input.created_by)
        post = Post.objects.get(id=input.post_id)
        postcomment_instance = PostComments(
            post_id=post, content=input.content, created_by=profile)

        postcomment_instance.save()
        return CreateComment(comment=postcomment_instance)


class PostInput(graphene.InputObjectType):
    created_by = graphene.Int()
    imageorvideo = graphene.String()
    body = graphene.String()
    source = graphene.String()


class CreatePost(graphene.Mutation):
    class Arguments:
        input = PostInput(required=True)

    post = graphene.Field(PostType)

    @ staticmethod
    def mutate(root, info, input=None):
        profile = Profile.objects.get(id=input.created_by)
        post_instance = Post(
            created_by=profile, body=input.body, source=input.source, imageorvideo=input.imageorvideo, date_created=datetime.now())
        post_instance.save()
        return CreatePost(post=post_instance)

# FORUM


class PostForumInput(graphene.InputObjectType):
    created_by = graphene.Int()
    body = graphene.String()
    title = graphene.String()


class CreatePostForum(graphene.Mutation):
    class Arguments:
        input = PostForumInput(required=True)

    postforum = graphene.Field(PostForumType)

    @ staticmethod
    def mutate(root, info, input=None):
        user = User.objects.get(id=input.created_by)
        postforum_instance = PostForum(
            created_by=user.profile, body=input.body, title=input.title, date_created=datetime.now())
        postforum_instance.save()
        return CreatePostForum(postforum=postforum_instance)


class LikeForumInput(graphene.InputObjectType):

    post_forum_id = graphene.Int()
    created_by = graphene.Int()


class CreateLikeForum(graphene.Mutation):
    class Arguments:
        input = LikeForumInput(required=True)

    likeforum = graphene.Field(PostForumLikesType)

    @ staticmethod
    def mutate(root, info, input=None):
        user = User.objects.get(id=input.created_by)
        post = PostForum.objects.get(id=input.post_forum_id)
        postlikes_instance = PostLikes(
            post_id=postForum, created_by=user.profile)
        postlikes_instance.save()
        return CreateLikeForum(likeforum=postlikes_instance)


class DeleteLikeForum(graphene.Mutation):
    class Arguments:
        input = LikeForumInput(required=True)

    likeforum = graphene.List(PostForumLikesType)

    @ staticmethod
    def mutate(root, info, input=None):
        user = User.objects.get(id=input.created_by)
        post = Post.objects.get(id=input.post_forum_id)

        postlikes_instance = PostLikes.objects.filter(
            post_id=post, created_by=user.profile)
        postlikes_instance.delete()
        return DeleteLikeForum(likeforum=postlikes_instance)


class CommentForumInput(graphene.InputObjectType):

    post_forum_id = graphene.Int()
    created_by = graphene.Int()
    content = graphene.String()


class CreateCommentForum(graphene.Mutation):
    class Arguments:
        input = CommentForumInput(required=True)

    commentforum = graphene.Field(PostForumCommentsType)

    @ staticmethod
    def mutate(root, info, input=None):
        user = User.objects.get(id=input.created_by)
        post = PostForum.objects.get(id=input.post_forum_id)
        postcomment_instance = PostForumComments(
            post_forum_id=post, content=input.content, created_by=user.profile, date_created=datetime.now())

        postcomment_instance.save()
        return CreateCommentForum(commentforum=postcomment_instance)


class FollowingInput(graphene.InputObjectType):
    id = graphene.ID()
    created_by = graphene.Int()
    user = graphene.Int()


class CreateFollowing(graphene.Mutation):
    class Arguments:
        input = FollowingInput(required=True)

    following = graphene.Field(FollowingsType)

    @ staticmethod
    def mutate(root, info, input=None):
        user_profile = Profile.objects.get(id=input.user)
        created_by_profile = Profile.objects.get(id=input.created_by)
        following_instance = Followings(
            created_by=created_by_profile, user=user_profile)
        following_instance.save()
        return CreateFollowing(following=following_instance)


class DeleteFollowing(graphene.Mutation):
    class Arguments:
        input = FollowingInput(required=True)

    following = graphene.Field(FollowingsType)

    @ staticmethod
    def mutate(root, info, input=None):
        user_profile = Profile.objects.get(id=input.user)
        created_by_profile = Profile.objects.get(id=input.created_by)
        following_instance = Followings.objects.filter(
            created_by=created_by_profile, user=user_profile)
        following_instance.first().delete()
        return DeleteFollowing(following=following_instance)


class UpdateProfilePicture(graphene.Mutation):
    class Arguments:
        id = graphene.Int()
        profilepicture = graphene.String()

    user = graphene.Field(ProfileType)

    @ staticmethod
    def mutate(root, info, id, profilepicture):
        cur_profile = Profile.objects.get(id=id)
        cur_profile.profilepicture = profilepicture
        cur_profile.save()
        return UpdateProfilePicture(user=cur_profile)


class UpdateBio(graphene.Mutation):
    class Arguments:
        id = graphene.Int()
        bio = graphene.String()

    user = graphene.Field(ProfileType)

    @ staticmethod
    def mutate(root, info, id, bio):
        cur_profile = Profile.objects.get(id=id)
        cur_profile.bio = bio
        cur_profile.save()
        return UpdateProfilePicture(user=cur_profile)


class UpdateFirstAndLastName(graphene.Mutation):
    class Arguments:
        id = graphene.Int()
        firstname = graphene.String()
        lastname = graphene.String()

    user = graphene.Field(UserType)

    @ staticmethod
    def mutate(root, info, id, firstname, lastname):
        cur_user = User.objects.get(id=id)

        cur_user.first_name = firstname
        cur_user.last_name = lastname
        cur_user.save()
        return UpdateFirstAndLastName(user=cur_user)


class UpdateLocation(graphene.Mutation):
    class Arguments:
        id = graphene.Int()
        location_latitude = graphene.Float()
        location_longitude = graphene.Float()

    user = graphene.Field(UserType)

    @ staticmethod
    def mutate(root, info, id, location_longitude, location_latitude):
        cur_user = User.objects.get(id=id)
        cur_user.profile.location_latitude = location_latitude
        cur_user.profile.location_longitude = location_longitude
        cur_user.save()
        return UpdateLocation(user=cur_user)


class AuthMutation(graphene.ObjectType):

    register = mutations.Register.Field()

    verify_account = mutations.VerifyAccount.Field()

    token_auth = mutations.ObtainJSONWebToken.Field()
    verify_token = mutations.VerifyToken.Field()
    create_token_with_refresh_token = mutations.RefreshToken.Field()


class Mutation(AuthMutation, graphene.ObjectType):
    create_like = CreateLike.Field()
    delete_like = DeleteLike.Field()
    create_comment = CreateComment.Field()
    create_post = CreatePost.Field()

    create_like_forum = CreateLikeForum.Field()
    delete_like_forum = DeleteLikeForum.Field()
    create_comment_forum = CreateCommentForum.Field()
    create_post_forum = CreatePostForum.Field()

    create_following = CreateFollowing.Field()
    delete_following = DeleteFollowing.Field()
    update_profilepicture = UpdateProfilePicture.Field()
    update_first_and_lastname = UpdateFirstAndLastName.Field()
    update_bio = UpdateBio.Field()
    update_location = UpdateLocation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
