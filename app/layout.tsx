'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/shared/styles/globals.scss'
import { Header, ContactPopup } from '@/src/widgets/header'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
})



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${inter.variable} antialiased`}>
				<ContactPopup />
				<Header />
				{children}
			</body>
		</html>
	)
}
