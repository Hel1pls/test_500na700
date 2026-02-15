'use client'
import React, { useState, useEffect } from 'react'
import { NewsCard } from '@entities/news/ui'
import styles from './NewsPage.module.scss'

type News = {
	id: number
	title: string
	description: string
	date: string
	image: string
}

export const NewsPage: React.FC = () => {
	const [news, setNews] = useState<News[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			fetch('/api/news.json')
				.then(res => res.json())
				.then(data => {
					setNews(data)
					setLoading(false)
				})
		}, 800)
	}, [])

	return (
		<section className={styles.newsSection}>
			<main className='page-content' style={{ position: 'relative' }}>
				<h1 className={styles.newsTitle}>Новости</h1>
				<div className={styles.newsWrapper}>
					{loading ? (
						<div className={styles.loading}>Загрузка...</div>
					) : (
						news.map(item => (
							<NewsCard
								key={item.id}
								title={item.title}
								description={item.description}
								date={item.date}
								image={item.image}
							/>
						))
					)}
				</div>
			</main>
		</section>
	)
}

export default NewsPage
