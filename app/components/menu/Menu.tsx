import React, {ReactElement} from 'react';
import {CoursesIcon} from "@/app/components/menu/icons/CoursesIcon";
import {BooksIcon} from "@/app/components/menu/icons/BooksIcon";
import {ProductsIcon} from "@/app/components/menu/icons/ProductsIcon";
import {ServicesIcon} from "@/app/components/menu/icons/ServicesIcon";
import {getMenu} from "@/api/Menu";
import {Category} from "@/app/components/Category/Category";
import styles from "./Menu.module.sass"


export const Menu = async (): Promise<ReactElement> => {
    const courses = await getMenu(0);
    console.log(courses)
    return <div className={styles.menu}>
        <Category data={courses} name={'Курсы'} children={<CoursesIcon/>}/>
        <Category data={''} name={'Сервисы'} children={<ServicesIcon/>}/>
        <Category data={courses} name={'Книги'} children={<BooksIcon/>}/>
        <Category data={courses} name={'Товары'} children={<ProductsIcon/>}/>

    </div>
};

export default Menu;