import {API} from "@/app/api";

export const getCourses = async () => {
    const res = await fetch(`${API.topPage.find}/_next/data/PG70niyvtkNqWZxoIOkFy/index.json`)
    console.log(res)
    return res.json()
}