import {API} from "@/app/api";

export const getPosts = async (num?: number) => {
    const res = await fetch(API.posts.find)
    return res.json()
}

export const getPost = async (id: number) => {
    const res = await fetch(API.posts.byAlias + id)
    return res.json()
}