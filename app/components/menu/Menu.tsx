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

// export const List = ({item}) => {
//
//     return <div className={styles.container}>
//         <a href={'#'}>{item._id.secondCategory || item.title}</a>
//         {/*<div className={styles.hrefContainer}>*/}
//         {/*    {item.pages.map((item) => (*/}
//         {/*        <div>{item.title} </div>*/}
//         {/*    ))}*/}
//         {/*</div>*/}
//         {<ListTree data={item.pages}/>}
//     </div>
// }

// export const ListTree = ({data}) => {
//     console.log(data)
//
//     if (data) {
//         return <div>
//             {data.map((item, id) => (
//                 <ListComponent key={item._id.secondCategory || item._id} item={item}/>
//             ))}
//         </div>
//     } else {
//         return null
//     }
//
//
// }

export const Menu = async (): Promise<ReactElement> => {
    const courses = await getMenu(0);
    console.log(courses)
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