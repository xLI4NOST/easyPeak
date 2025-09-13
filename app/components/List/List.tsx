'use client'

import React from "react";
import {ListTree} from "@/app/components/ListTree/ListTree";
import {ListProps} from "@/app/components/List/list.props";
import styles from "./list.module.sass"
import Link from "next/link";
import {P} from "@/app/components/P/P";

export const List = ({_id, alias, category, title, pages}: ListProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleShowList = (e) => {
        e.stopPropagation();
        setIsOpen(prevState => !prevState);
    }

    return <div onClick={(e) => {
        handleShowList(e)
    }}>

        {/*<a href={alias || '#'}>{_id.secondCategory || title}</a>*/}
        <Link href={alias ? `/courses/${alias}` : '#'}>
            <P>{_id.secondCategory || title}</P>
        </Link>

        {isOpen && <ListTree data={pages}/>}
    </div>
}