import { Header } from '@widgets/header'
import { Button } from '@shared/ui/Button'
import { Link } from '@shared/ui/Link'
import { Checkbox } from '@shared/ui/Checkbox'
import { Input } from '@shared/ui/Input'

export default function Home() {
	return (
		<div>
			<Header />
			<main className='page-content'>
				

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

				<div style={{ marginTop: 28 }}>
					<Checkbox label='Checkbox' muted />
				</div>

				<div style={{ marginTop: 28 }}>
					<Input placeholder='E-mail' />
				</div>

				<div style={{ marginTop: 12 }}>
					<Input placeholder='E-mail (active)' autoFocus />
				</div>
			</main>
		</div>
	)
}
