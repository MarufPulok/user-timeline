export type PostsRes = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type PostWithUserRes = {
    userId: number;
    id: number;
    title: string;
    body: string;
    user: string | null;
}