import { Header } from '@widgets/header'
import { NewsPage } from '@pages/news/NewsPage'


export default function Home() {
	return (
		<div>
			<Header />
			<main className='page-content'>
				<NewsPage />
			</main>
		</div>
	)
}
