import { Button } from '@shared/ui/Button'
import { Link } from '@shared/ui/Link'

export default function Home() {
	return (
		<div>
			<main>
				<Button variant='black' size='normal'>
					Связаться с нами
				</Button>

				<div style={{ marginTop: 24 }}>
					<Link variant='title' href='#'>
						Links
					</Link>
				</div>

				<div style={{ marginTop: 12 }}>
					<Link variant='normal' href='#'>
						Normal
					</Link>
					<span style={{ marginLeft: 16 }} />
					<Link variant='normal' muted href='#'>
						Normal (muted)
					</Link>
				</div>
			</main>
		</div>
	)
}
