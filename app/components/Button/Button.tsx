import {ButtonProps} from "@/app/components/Button/Button.props";
import s from './Button.module.sass'
import cn from 'classnames'
import React from "react";
import {ButtonArrow} from "@/app/components/Button/ButtonArrow";


export const Button = ({
                           appearance,
                           arrow = 'none',
                           children,
                           className,
                           ...props
                       }: ButtonProps): React.ReactElement => {
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

                   <ButtonArrow/>

                </span>
            }
        </button>
    )
}


