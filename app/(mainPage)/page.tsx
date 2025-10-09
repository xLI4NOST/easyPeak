'use server'

import React, {JSXElementConstructor, ReactElement} from "react";
import {Htag} from "@/app/shared/ui/Htag/Htag";
import {Button} from "@/app/shared/ui/Button/Button";
import {P} from "@/app/shared/ui/P/P";
import {Tag} from "@/app/shared/ui/Tag/Tag";
import {Rating} from "@/app/shared/ui/Rating/Rating";
import {BlogCard} from "@/app/features/Blog/ui/BlogCard/BlogCard";
import Menu from "@/app/widgetes/SideBar/Menu/Menu";
import {getCourses} from "@/app/shared/api/courses";
import {getMenu} from "@/app/shared/api/Menu";

export default async function Home(): Promise<ReactElement<unknown, string | JSXElementConstructor<any>>> {

    return (
        <>
            <Htag tag='h1'>Текст</Htag>
            <Button appearance={'primary'} arrow='right'>Кнокпка</Button>
            <Button appearance={'ghost'} arrow='right'>Кнокпка</Button>

            <P size={'l'}>большой</P>
            <P>дефолт</P>
            <P size={'s'}>мелкий</P>
            <Tag size={'s'} color={'red'}>Маленький</Tag>
            <Tag size={'m'} color={'ghost'}>Средний</Tag>
            <Tag size={'m'} color={'primary'} href={'http://s'}>Primary</Tag>

            <Rating rating={4} isEditable={true}/>

            <BlogCard
                image={'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/2147496605/images/adSKFRGlQnauNI2eNk5y_blog-CSSGrid.jpg'}
                href={'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout'}
                tag={'Front-end'}
                date={'1 месяц назад'}
                docsHref={'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout'}
                docsHrefText={'Грид-раскладка (CSS Grid Layout)'}
                title={'Как работать с CSS Grid'}
                description={'представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'}
                readTime={'3 минуты'}
            />
        </>
    );
}
