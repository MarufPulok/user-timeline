import APIUrl from "@/constants/apiUrl"
import { PostsRes } from "@/lib/post.dto"

export default function PostService() {
    const usePostListQuery = async () => {
        const response = await fetch(`${APIUrl.base}${APIUrl.posts}`)

        if (!response.ok) {
            throw new Error("Network response was not ok")
        }

        const posts = await response.json() as PostsRes[]
        return posts
    }

    return { usePostListQuery }
}