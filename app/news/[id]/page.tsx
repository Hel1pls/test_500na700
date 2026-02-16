import type { Metadata } from 'next'
import { NewsDetailPage } from '@/src/pages/newsDetail'
import Footer from '@/src/widgets/footer'

export const metadata: Metadata = {
	title: 'Новость',
	description: 'Страница деталей новости',
}

interface NewsDetailPageProps {
	params: Promise<{
		id: string
	}>
}

export default async function Page({ params }: NewsDetailPageProps) {
	const { id } = await params
    return (
			<>
				<main className='page-content'>
					<NewsDetailPage id={id} />
				</main>
            <Footer/>
			</>
		)
}
