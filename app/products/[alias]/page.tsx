import React from 'react';
import {Metadata} from "next";
import {getPage} from "@/api/page";
import {getMenu} from "@/api/Menu";

export const metadata: Metadata = {
    title: "Страница",
}

export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})))
}

const PageProducts = async ({params}: { params: { alias: string } }) => {
    const page = await getPage(params.alias);
    console.log(page)
    // if (!page) {
    //     notFound()
    // }

    return (
        <div>
        </div>
    );
};

export default PageProducts;