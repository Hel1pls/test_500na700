'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './NewsCard.module.scss'

export interface NewsCardProps {
	id: number
	title: string
	description: string
	date: string
	image: string
}

export const NewsCard: React.FC<NewsCardProps> = ({
	id,
	title,
	description,
	date,
	image,
}) => {
	const router = useRouter()

	// Максимальная длина описания (примерно как в json)
	const MAX_DESC = 110
	const shortDescription =
		description.length > MAX_DESC
			? description.slice(0, MAX_DESC).trim() + '...'
			: description

	const handleClick = () => {
		router.push(`/news/${id}`)
	}

	return (
		<div className={styles.card} onClick={handleClick}>
			<div className={styles.image}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.description}>{shortDescription}</div>
			</div>
			<div className={styles.date}>{date}</div>
		</div>
	)
}

export default NewsCard
