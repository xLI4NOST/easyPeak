import {API} from "@/app/api";

export const getPage = async (alias: string): Promise<[]> => {
    const res = await fetch(API.topPage.byAlias + alias)
    console.log(res)
    if (!res.ok) {
        return []
    }

    return res.json();
}