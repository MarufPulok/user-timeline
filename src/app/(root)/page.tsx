import PostCard from "@/components/PostCard";
import PostService from "@/services/post.service";
import UserService from "@/services/user.service";

export default async function Home() {
  const posts = await PostService().usePostListQuery();
  const users = await UserService().useUserListQuery();

  const updatedPosts = posts.map((post) => {
    const user = users.find((user) => user.id === post.userId);
    return { ...post, user: user ? user.name : null };
  });

  return (
    <>
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {updatedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </>
  );
}
