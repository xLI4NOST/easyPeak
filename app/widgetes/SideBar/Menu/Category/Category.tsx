'use client'

import styles from './category.module.sass'
import {P} from "@/app/shared/ui/P/P";
import {ListTree} from "@/app/widgetes/SideBar/Menu/Category/ListTree/ListTree";
import React, {useState} from "react";
import {CategoryProps} from "@/app/widgetes/SideBar/Menu/Category/Category.props";
import {ListProps} from "@/app/widgetes/SideBar/Menu/Category/ListTree/List/list.props";

export const Category = ({data, name, children}: CategoryProps<ListProps>) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleShowList = () => {
        setIsOpen(prevState => !prevState);
    }

    return <div className={styles.category}>
        <div onClick={handleShowList} className={styles.category_head}>
            {children}
            <P className={styles.category_name} size={'l'}>{name}</P>
        </div>
        {isOpen && <ListTree data={data}/>}
    </div>
}