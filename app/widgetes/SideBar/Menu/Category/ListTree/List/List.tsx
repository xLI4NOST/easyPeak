'use client'

import React from "react";
import {ListTree} from "@/app/widgetes/SideBar/Menu/Category/ListTree/ListTree";
import {ListProps} from "@/app/widgetes/SideBar/Menu/Category/ListTree/List/list.props";
import Link from "next/link";
import {P} from "@/app/shared/ui/P/P";

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