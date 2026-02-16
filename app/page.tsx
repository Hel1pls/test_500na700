import { Header, ContactPopup } from '@widgets/header'
import { NewsPage } from '@pages/news/NewsPage'

export default function Home() {
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
