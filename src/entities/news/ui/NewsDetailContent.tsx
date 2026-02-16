'use client'
import React from 'react'
import styles from './NewsDetailContent.module.scss'

export interface NewsDetailContentProps {
	title: string
	date: string
	shortDescription: string
	fullDescription: string
}

export const NewsDetailContent: React.FC<NewsDetailContentProps> = ({
	title,
	date,
	shortDescription,
	fullDescription,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.date}>{date}</p>
			</div>
			<div className={styles.content}>
				<h3 className={styles.shortDescription}>{shortDescription}</h3>
				<p className={styles.fullDescription}>{fullDescription}</p>
			</div>
		</div>
	)
}

export default NewsDetailContent
