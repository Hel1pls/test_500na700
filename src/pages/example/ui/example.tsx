import React from 'react'

export const metadata = {
	title: 'Example — FSD',
}

export function ExamplePage() {
	return (
		<main style={{ padding: 24 }}>
			<h1>Пример страницы (FSD)</h1>
			<p>
				Это пример страницы, находящейся в <code>src/pages/example</code> и
				ре-экспортируемой из <code>app/example</code>.
			</p>
		</main>
	)
}

export default ExamplePage
