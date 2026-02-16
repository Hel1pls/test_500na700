import { Metadata } from 'next'
import { NewsPage } from '@pages/news/NewsPage'

export const metadata: Metadata = {
	title: 'Новости',
	description: 'Главная страница новостей проекта',
}

export default function NewsPageWrapper() {
   return (
			<>
				<main className='page-content'>
					<NewsPage />
				</main>
			</>
		)
}
