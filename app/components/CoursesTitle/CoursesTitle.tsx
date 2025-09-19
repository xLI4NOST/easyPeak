import styles from './CoursesTitle.module.sass'
import {Htag} from "@/app/components/Htag/Htag";
import {Tag} from "@/app/components/Tag/Tag";
import React from "react";
import {CoursesRating} from "@/app/components/CoursesTitle/icons/CoursesRating";
import {P} from "@/app/components/P/P";


function CoursesTitle() {
    return <div className={styles.coursesTitle}>
        <div className={styles.coursesTitle_description}>
            <Htag tag={'h1'}>Курсы по Photoshop</Htag>
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
