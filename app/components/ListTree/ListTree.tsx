'use client'

import React from "react";
import {List} from '../../components/List/List'
import {ListTreeProps} from "@/app/components/ListTree/listTree.props";
import styles from './listTree.module.sass'


export const ListTree = ({data}: ListTreeProps): React.ReactElement => {

    if (data) {
        return <div className={styles.category_container}>
            {data.map((item, id) => (

                <List _id={item._id}
                      title={item.title}
                      alias={item.alias}
                      category={item.category}
                      pages={item.pages}
                      key={item._id?.secondCategory || item._id}
                />
            ))}
        </div>
    } else {
        return null
    }


}