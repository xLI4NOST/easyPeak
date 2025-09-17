import React from 'react';
import styles from '../CoursesPage.module.sass'
import {Htag} from "@/app/components/Htag/Htag";
import {Tag} from "@/app/components/Tag/Tag";
import ProfessionCard from "@/app/components/ProfessionCard/ProfessionCard";
import {CourseProps} from "@/app/courses/Courses.props";
import ProfessionDescription from "@/app/components/ProfessionDescription/ProfessionDescription";
import {Button} from "@/app/components/Button/Button";
import Vacancies from "@/app/components/Vacancies/Vacancies";
import Advantages from "@/app/components/Advantages/Advantages";
import AcquariedSkills from "@/app/components/AcquariedSkills/AcquariedSkills";


const Page = (data: CourseProps): React.ReactElement => {


    return (
        <>
            <div className={styles.coursesTitle}>
                <Htag tag={'h1'}>Курсы по Photoshop</Htag>
                <Tag size={'m'} color={'gray'}>10</Tag>
            </div>
            <div className={styles.coursesPage}>
                <ProfessionCard/>
                <ProfessionDescription/>
                <div className={styles.coursesPage_buttons}>
                    <Button appearance={"primary"}>Узнать подробнее</Button>
                    <Button appearance={"ghost"} arrow={'right'}>Читать отзывы</Button>
                </div>

            </div>
            <div className={styles.coursesTitle}>
                <Htag tag={'h1'}>Вакансии - Photoshop</Htag>
                <Tag size={'s'} color={'red'}>hh.ru</Tag>
            </div>
            <Vacancies/>
            <Advantages/>
            <AcquariedSkills/>
        </>
    );
};

export default Page;