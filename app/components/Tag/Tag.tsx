import {TagProps} from "@/app/components/Tag/Tag.props";
import s from "./Tag.module.sass"
import cn from "classnames";

export const Tag = ({size, children, color, href, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(s.tag, className, {
            [s.medium]: size === 'm',
            [s.small]: size === 's',
            [s.ghost]: color === 'ghost',
            [s.red]: color === 'red',
            [s.grey]: color === 'gray',
            [s.primary]: color === 'primary',
            [s.green]: color === 'green',

        })}
             {...props}
        >{
            href ?
                <a href={href}>{children}</a>
                :
                <>{children}</>
        }

        </div>
    )
}

