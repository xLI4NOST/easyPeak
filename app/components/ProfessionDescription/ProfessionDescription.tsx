import styles from './ProfessionDescription.module.sass'
import {P} from "@/app/components/P/P";
import {Htag} from "@/app/components/Htag/Htag";
import {Tag} from "@/app/components/Tag/Tag";


function ProfessionDescription() {

    return <div className={styles.professionDescription}>
        <P>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки,
            которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами.
            Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</P>
        <div className={styles.professionDescription_info}>
            <div className={styles.professionDescription_info_prerogatives}>
                <div className={styles.professionDescription_info_prerogatives_prepogative}>
                    <Htag tag={'h2'}>Документ об окончании</Htag>
                    <span></span>
                    <P size={'l'}>Диплом</P>
                </div>
                <div className={styles.professionDescription_info_prerogatives_prepogative}>
                    <Htag tag={'h2'}>Сложность</Htag>
                    <span></span>
                    <P size={'l'}>Начальная</P>
                </div>
                <div className={styles.professionDescription_info_prerogatives_prepogative}>
                    <Htag tag={'h2'}>Длительность</Htag>
                    <span></span>
                    <P size={'l'}>5 месяцев</P>
                </div>
                <Tag className={styles.professionDescription_info_prerogatives_prepogative_tag} color={"ghost"}>Гарантия
                    трудоустройства</Tag>
            </div>
            <div className={styles.professionDescription_info_advantages}>
                <div className={styles.professionDescription_info_advantages_advantage}>
                    <Htag tag={'h2'}>Преимущества</Htag>
                    <P>Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала</P>
                </div>
                <div className={styles.professionDescription_info_advantages_advantage}>
                    <Htag tag={'h2'}>Недостатки</Htag>
                    <P>Некоторое темы раскрыты не до конца</P>
                </div>
            </div>
        </div>

    </div>
}

export default ProfessionDescription
