'use client'
import React from 'react'
import styles from './header.module.scss'
import { Button } from '@shared/ui/Button'

export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img
					src='/assets/icon/Logo.svg'
					alt='Logo'
					className={styles.logoImage}
				/>
			</div>
			<div className={styles.spacer} />
			<div className={styles.actions}>
				<Button
					variant='white'
					size='normal'
					onClick={() =>
						window.dispatchEvent(new CustomEvent('openContactPopup'))
					}
				>
					Связаться с нами
				</Button>
			</div>
		</header>
	)
}

export default Header
