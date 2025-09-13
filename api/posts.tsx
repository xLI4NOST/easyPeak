import {API} from "@/app/api";

export const getPosts = async (num?: number) => {
    const res = await fetch(API.posts.find)
    return res.json()
}