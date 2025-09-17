import styles from './AcquariedSkills.module.sass'
import {P} from "@/app/components/P/P";
import {Htag} from "@/app/components/Htag/Htag";
import {Tag} from "@/app/components/Tag/Tag";


function AcquariedSkills() {


    return <div className={styles.skills}>
        <Htag tag={'h2'}>Получаемые навыки</Htag>
        <div className={styles.skills_tags}>
            <Tag color={'primary'} size={'m'}>Работа в Photoshop</Tag>
            <Tag color={'primary'} size={'m'}>Подготовка макетов</Tag>
            <Tag color={'primary'} size={'m'}>Графический дизайн</Tag>
            <Tag color={'primary'} size={'m'}>Web дизайн</Tag>
            <Tag color={'primary'} size={'m'}>Дизайн сайтов</Tag>

        </div>
    </div>
}

export default AcquariedSkills
