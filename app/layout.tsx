'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/shared/styles/globals.scss'
// import { Footer } from '@/src/widgets/footer'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
})

// export const metadata: Metadata = {
// 	title: '500na700 Test',
// 	description: 'Тестовое задание — верстка и компоненты',
// }

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${inter.variable} antialiased`}>
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	)
}
