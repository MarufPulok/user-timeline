import { PostWithUserRes } from "@/lib/post.dto";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: PostWithUserRes;
};

const PostCard = ({ post }: Props) => {
  return (
    <article className="flex w-full flex-col rounded-xl px-0 xs:px-7 bg-dark-2 p-7">
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link
              href={`/profile/${post.userId}`}
              className="relative h-11 w-11
            hover:scale-105 transition-transform duration-300 ease-in-out
            "
            >
              <Image
                src={"/assets/user.jpg"}
                alt="user_community_image"
                fill
                className="cursor-pointer rounded-full object-cover"
              />
            </Link>
            <div className="thread-card_bar"></div>
          </div>
          <div className="flex w-full flex-col">
            <Link href={`/profile/${post.userId}`} className="w-fit">
              <h4
                className="cursor-pointer text-base-semibold text-light-1
               hover:underline transition-transform duration-300 ease-in-out
              "
              >
                {post.user}
              </h4>
            </Link>
            <h3 className="mt-2 text-lg-semibold text-light-3">{post.title}</h3>
            <p className="mt-2 text-small-regular text-light-2">{post.body}</p>
            <div className="mb-3 mt-5 flex flex-col gap-3">
              <div className="flex gap-3.5">
                <Image
                  src="/assets/heart-gray.svg"
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <Link href={`/`}>
                  <Image
                    src="/assets/reply.svg"
                    alt="reply"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </Link>
                <Image
                  src="/assets/repost.svg"
                  alt="repost"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <Image
                  src="/assets/share.svg"
                  alt="share"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
