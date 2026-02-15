import React from 'react'
import styles from './NewsCard.module.scss'

export interface NewsCardProps {
	title: string
	description: string
	date: string
	image: string
}

export const NewsCard: React.FC<NewsCardProps> = ({
	title,
	description,
	date,
	image,
}) => {
	// Максимальная длина описания (примерно как в json)
	const MAX_DESC = 125
	const shortDescription =
		description.length > MAX_DESC
			? description.slice(0, MAX_DESC).trim() + '...'
			: description

	return (
		<div className={styles.card}>
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
