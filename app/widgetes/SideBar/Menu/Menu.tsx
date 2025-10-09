import React, {ReactElement} from 'react';
import {CoursesIcon} from "@/app/shared/icons/CoursesIcon";
import {BooksIcon} from "@/app/shared/icons/BooksIcon";
import {ProductsIcon} from "@/app/shared/icons/ProductsIcon";
import {ServicesIcon} from "@/app/shared/icons/ServicesIcon";
import {getMenu} from "@/app/shared/api/Menu";
import {Category} from "@/app/widgetes/SideBar/Menu/Category/Category";
import styles from "./Menu.module.sass"
import {getMenuList} from "@/app/shared/api/courses";


export const Menu = async (): Promise<ReactElement> => {
    const courses = await getMenu();
    const menu = await getMenuList();
    return <div className={styles.menu}>
        <Category data={menu} name={'Курсы'} children={<CoursesIcon/>}/>
        <Category data={''} name={'Сервисы'} children={<ServicesIcon/>}/>
        <Category data={courses} name={'Книги'} children={<BooksIcon/>}/>
        <Category data={courses} name={'Товары'} children={<ProductsIcon/>}/>

    </div>
};

export default Menu;