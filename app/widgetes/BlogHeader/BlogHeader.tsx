"use client"

import styles from './BlogHeader.module.sass'
import React from "react";
import {GitHubIcon} from "@/app/shared/icons/GitHubIcon";

export const BlogHeader = (): React.ReactElement => {
    return <div className={styles.blogHeader}>
        <nav className={styles.blogHeaderNav}>
            <ul>
                <li>Новости</li>
                <li>О блоге</li>
                <li>Полезное</li>
            </ul>
        </nav>

        <GitHubIcon/>
    </div>
}


