import React from 'react';
import {Metadata} from "next";
import {getPage} from "@/api/page";
import {getMenu} from "@/api/Menu";

export const metadata: Metadata = {
    title: "Страница",
}

export async function generateStaticParams() {
    const menu = await getMenu(1);
    return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})))
}

const PageProducts = async ({params}: { params: Promise<{ alias: string }> }) => {
    const page = await getPage(params.alias);
    if (!page) {
        return null
    }

    return (
        <div>
        </div>
    );
};

export default PageProducts;