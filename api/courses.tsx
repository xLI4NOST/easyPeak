export const getCourses = async () => {
    const res = await fetch('https://coursus.ru/_next/data/PG70niyvtkNqWZxoIOkFy/index.json')
    console.log(res)
    return res.json()
}