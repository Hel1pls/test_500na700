import { Metadata } from 'next'
import { Header, ContactPopup } from '@widgets/header'
import { NewsPage } from '@pages/news/NewsPage'

export const metadata: Metadata = {
	title: 'Новости',
	description: 'Главная страница новостей проекта',
}

export default function NewsPageWrapper() {
   return (
			<>
				<Header />
				<ContactPopup />
				<main className='page-content'>
					<NewsPage />
				</main>
			</>
		)
}
