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
	return (
		<div className={styles.card}>
			<div
				className={styles.image}
				style={{ backgroundImage: `url(${image})` }}
			/>
			<div className={styles.content}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.description}>{description}</div>
			</div>
			<div className={styles.date}>{date}</div>
		</div>
	)
}

export default NewsCard
