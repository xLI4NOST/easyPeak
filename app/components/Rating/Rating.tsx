'use client'

import styles from './Rating.module.sass'
import {RatingProps} from "@/app/components/Rating/Rating.props";
import React, {JSX, KeyboardEvent, useEffect, useState} from "react";
import cn from "classnames";


export const Rating = ({
	                       children,
	                       rating,
	                       setRating,
	                       isEditable = false,
	                       classname,
	                       ...props
                       }: RatingProps): React.ReactElement => {


	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => {
		constructRating(rating)
	}, [rating])

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.field]: i < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => handleClickStar(i + 1)}
				>
                    <svg
	                    tabIndex={isEditable ? 0 : -1}
	                    onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}

	                    xmlns="http://www.w3.org/2000/svg"
	                    width="20" height="20"
	                    fill="#E2E2E2"
                    >
                        <path
	                        d="M20 7.6a1 1 0 0 0-1-.8l-5.7-.6L11 .7a1 1 0 0 0-1-.7 1 1 0 0 0-1 .7L6.7 6.2 1 6.8a1 1 0 0 0-1 .8c0 .4 0 .8.4 1.1l4.3 4-1.3 6c0 .4.1.8.5 1a1 1 0 0 0 1.1.1l5-3 5 3c.3.3.8.2 1.1 0 .4-.3.6-.7.5-1.2l-1.3-5.9 4.3-4c.4-.3.5-.7.3-1.1Z"/>
                    </svg>
                </span>
			)
		})
		setRatingArray(updatedArray)
	}

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return
		}
		constructRating(i)
	}

	const handleClickStar = (i: number) => {
		if (!isEditable || !setRating) {
			return
		}
		setRating(i)
	}

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code !== 'Space' || !setRating) {
			return
		}
		setRating(i)
	}


	return (
		<div className={styles} {...props}>
			{ratingArray.map((r: JSX.Element, i: number) => (
				<span key={i}>{r}</span>
			))}
		</div>
	)


}