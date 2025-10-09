import React from 'react';
import styles from '../CoursesPage.module.sass'
import {Htag} from "@/app/shared/ui/Htag/Htag";
import {Tag} from "@/app/shared/ui/Tag/Tag";
import ProfessionCard from "@/app/features/Course/ui/ProfessionCard/ProfessionCard";
import {CourseProps} from "@/app/courses/Courses.props";
import ProfessionDescription from "@/app/features/Course/ui/ProfessionDescription/ProfessionDescription";
import {Button} from "@/app/shared/ui/Button/Button";
import Vacancies from "@/app/features/Course/ui/Vacancies/Vacancies";
import Advantages from "@/app/features/Course/ui/Advantages/Advantages";
import AcquariedSkills from "@/app/features/Course/ui/AcquariedSkills/AcquariedSkills";
import CoursesTitle from "@/app/features/Course/ui/CoursesTitle/CoursesTitle";
import {getCourseByAlias} from "@/app/shared/api/courses";


const Page = async ({params}): React.ReactElement => {
    const {alias} = await params
    const course = await getCourseByAlias(alias)

    return (
        <>
            <CoursesTitle title={course.title}/>
            <div className={styles.coursesPage}>
                <ProfessionCard profession={course.profession}/>
                <ProfessionDescription description={course.desc}/>
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