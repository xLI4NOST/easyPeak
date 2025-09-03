import React, {ReactElement} from 'react';
import {CoursesIcon} from "@/app/components/menu/icons/CoursesIcon";
import {BooksIcon} from "@/app/components/menu/icons/BooksIcon";
import {ProductsIcon} from "@/app/components/menu/icons/ProductsIcon";
import {ServicesIcon} from "@/app/components/menu/icons/ServicesIcon";
import {MenuItem, MenuItemChild} from "@/app/components/menu/Menu.props";
import {getMenu} from "@/api/Menu";
import {P} from "@/app/components/P/P";
import styles from "./Menu.module.sass"

const data: MenuItem<MenuItemChild[]>[] = [
    {
        route: 'courses',
        name: 'Курсы',
        icon: <CoursesIcon/>,
        id: 1,
        children: [
            {
                name: 'Дизайн',
                route: 'design'
            },

            {
                name: 'Разработка',
                route: 'development'
            },
            {
                name: 'Аналитика',
                route: 'analytics'
            },
            {
                name: 'Маркетинг',
                route: 'marketing'
            }


        ],


    },
    {
        route: 'services',
        name: 'Сервисы',
        icon: <ServicesIcon/>,
        id: 1
    },
    {
        route: 'books',
        name: 'Книги',
        icon: <BooksIcon/>,
        id: 1
    },
    {
        route: 'products',
        name: 'Продукты',
        icon: <ProductsIcon/>,
        id: 1
    },
]

export const ListComponent = ({item}) => {
    const isEmpty = item.pages.length === 0
    console.log(isEmpty)
    return <div className={styles.container}>
        <a href={'#'}>{item._id.secondCategory}</a>
        {/*{!isEmpty && <ListTree data={item.pages}/>}*/}
    </div>
}

export const ListTree = async ({data}) => {
    console.log(data)
    return <div>
        {data.map((item, id) => (
            <ListComponent item={item} key={item._id.secondCategory ? item._id.secondCategory : item._id}/>
        ))}
    </div>
}

export const Menu = async (): Promise<ReactElement> => {
    const courses = await getMenu(0);
    return <div>
        <div className={styles.category}>
            <CoursesIcon/>
            <div>
                <P size={'l'}>Курсы</P>
                <ListTree data={courses}/>
            </div>
        </div>

    </div>
};

export default Menu;