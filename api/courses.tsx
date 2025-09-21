import {API} from "@/app/api";

export const getCourses = async () => {
    const res = await fetch(`${API.topPage.find}/_next/data/PG70niyvtkNqWZxoIOkFy/index.json`)
    // console.log(`${API.topPage.find}/_next/data/PG70niyvtkNqWZxoIOkFy/index.json`)
    return res.json()
}

export const getMenuList = async () => {
    const res = await fetch(`http://localhost:3001/courses`, {})
    // console.log(res)
    return res.json()
}

export const getCourseByAlias = async (alias: number) => {
    const res = await fetch(`http://localhost:3001/course`, {})
    return res.json()
}