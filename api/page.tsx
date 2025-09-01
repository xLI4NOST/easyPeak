import {API} from "@/app/api";

export async function getPage(alias: string): Promise<[]> {
    const res = await fetch(API.topPage.byAlias + alias)
    console.log(res)
    if (!res.ok) {
        return null
    }

    return res.json();
}