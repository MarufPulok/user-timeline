import PostCard from "@/components/PostCard";
import PostService from "@/services/post.service";
import UserService from "@/services/user.service";
import React from "react";

interface UserProfilePageProps {
  params: {
    userId: string;
  };
}

export default async function UserProfilePage({
  params,
}: UserProfilePageProps) {
  const posts = await PostService().usePostListQuery();
  const users = await UserService().useUserListQuery();

  const userPosts = posts.filter(
    (post) => post.userId === parseInt(params.userId)
  );

  const userPostWithUsername = userPosts.map((post) => {
    const user = users.find((user) => user.id === post.userId);
    return { ...post, user: user ? user.name : null };
  });

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="head-text text-left">
        User Timeline of{" "}
        {users.find((user) => user.id === parseInt(params.userId))?.name}
      </h1>
      {userPostWithUsername.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
