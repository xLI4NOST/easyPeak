import styles from './BlogHeader.module.sass'
import React from "react";
import {GitHubIcon} from "@/app/components/BlogHeader/GitHubIcon";

export const BlogHeader = (): React.ReactElement => {

    return <div className={styles.blogHeader}>

        <nav className={styles.blogHeaderNav}>
            {/*<ul className={styles.headerNav_Burger}>*/}
            {/*    <li>Новости</li>*/}
            {/*    <li>О блоге</li>*/}
            {/*    <li>Полезное</li>*/}
            {/*</ul>*/}

            <ul>
                <li>Новости</li>
                <li>О блоге</li>
                <li>Полезное</li>
            </ul>
        </nav>

        <GitHubIcon/>
    </div>
}


