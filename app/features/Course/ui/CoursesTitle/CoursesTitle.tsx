import styles from './CoursesTitle.module.sass'
import {Htag} from "@/app/shared/ui/Htag/Htag";
import {Tag} from "@/app/shared/ui/Tag/Tag";
import React from "react";
import {CoursesRating} from "@/app/shared/icons/CoursesRating";
import {P} from "@/app/shared/ui/P/P";


function CoursesTitle({title}: { title?: string }) {
    return <div className={styles.coursesTitle}>
        <div className={styles.coursesTitle_description}>
            <Htag tag={'h1'}>{title}</Htag>
            <Tag size={'m'} color={'gray'}>10</Tag>
        </div>
        <div className={styles.coursesTitle_sort}>
            <button className={styles.coursesTitle_description_sortButton}>
                <CoursesRating/>
                <P>По рейтингу</P>
            </button>
            <button className={styles.coursesTitle_description_sortButton}>
                <P>По цене</P>
            </button>

        </div>
    </div>
}

export default CoursesTitle
