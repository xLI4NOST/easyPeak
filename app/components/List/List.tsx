'use client'

import React from "react";
import {ListTree} from "@/app/components/ListTree/ListTree";
import {ListProps} from "@/app/components/List/list.props";
import styles from "./list.module.sass"

export const List = ({_id, alias, category, title, pages}: ListProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleShowList = (e) => {
        e.stopPropagation();
        setIsOpen(prevState => !prevState);
    }

    return <div onClick={(e) => {
        handleShowList(e)
    }}>
        <a href={alias || '#'}>{_id.secondCategory || title}</a>

        {isOpen && <ListTree data={pages}/>}
    </div>
}