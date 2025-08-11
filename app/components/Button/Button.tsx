import {ButtonProps} from "@/app/components/Button/Button.props";
import s from './Button.module.sass'
import cn from 'classnames'


export const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(s.button, className, {
                [s.primary]: appearance === 'primary',
                [s.ghost]: appearance === 'ghost'
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' &&
                <span className={cn(s.arrow, {
                    [s.down]: arrow === 'down',
                })}>

                     <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="#3B434E">
                         <path d="M5.7 4.6 1.3.2A.5.5 0 0 0 .9 0C.7 0 .6 0
                         .5.2L.2.5c-.2.2-.2.5 0 .8L3.9 5 .2 8.7l-.2.4c0 .2 0 .3.2.4l.3.3.4.2c.1 0 .3 0 .4-.2l4.4-4.4L6 5c0-.1 0-.3-.2-.4Z"/>
                     </svg>
                </span>
            }
        </button>
    )
}


