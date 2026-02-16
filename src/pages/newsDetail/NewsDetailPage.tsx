'use client'
import React, { useState, useEffect } from 'react'
import styles from './NewsDetailPage.module.scss'
import { NewsDetailContent } from '@/src/entities/news/ui'

export interface NewsDetailPageProps {
	id: string
}

interface NewsDetail {
	id: number
	title: string
	date: string
	shortDescription: string
	fullDescription: string
	image: string
}

export const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ id }) => {
	const [newsDetail, setNewsDetail] = useState<NewsDetail | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		fetch('/api/news.json')
			.then(res => res.json())
			.then(data => {
				const detail = data.find((item: NewsDetail) => item.id === parseInt(id))
				setNewsDetail(detail || null)
				setLoading(false)
			})
			.catch(() => setLoading(false))
	}, [id])

	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<div className={styles.detailsWrapper}>
					{loading ? (
						<div className={styles.loading}>Загрузка...</div>
					) : newsDetail ? (
						<>
							<div className={styles.image}>
								<img src={newsDetail.image} alt={newsDetail.title} />
							</div>
							<NewsDetailContent
								title={newsDetail.title}
								date={newsDetail.date}
								shortDescription={newsDetail.shortDescription}
								fullDescription={newsDetail.fullDescription}
							/>
						</>
					) : (
						<div className={styles.error}>Новость не найдена</div>
					)}
				</div>
			</div>
		</main>
	)
}

export default NewsDetailPage
