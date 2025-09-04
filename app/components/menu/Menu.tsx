import React, {ReactElement} from 'react';
import {CoursesIcon} from "@/app/components/menu/icons/CoursesIcon";
import {BooksIcon} from "@/app/components/menu/icons/BooksIcon";
import {ProductsIcon} from "@/app/components/menu/icons/ProductsIcon";
import {ServicesIcon} from "@/app/components/menu/icons/ServicesIcon";
import {MenuItem, MenuItemChild} from "@/app/components/menu/Menu.props";
import {getMenu} from "@/api/Menu";
import {P} from "@/app/components/P/P";
import styles from "./Menu.module.sass"
import {ListTree} from "@/app/components/ListTree/ListTree";
import {Category} from "@/app/components/Category/Category";
import {ListProps} from "@/app/components/List/list.props";


export const Menu = async (): Promise<ReactElement> => {
    const courses = await getMenu(0);

    return <div>
        <Category data={courses} name={'Курсы'} children={<CoursesIcon/>}/>
        <Category data={''} name={'Сервисы'} children={<ServicesIcon/>}/>
        <Category data={courses} name={'Книги'} children={<BooksIcon/>}/>
        <Category data={courses} name={'Товары'} children={<ProductsIcon/>}/>

    </div>
};

export default Menu;