import type { Metadata } from 'next'
import { NewsDetailPage } from '@/src/pages/newsDetail'

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
	return <NewsDetailPage id={id} />
}
