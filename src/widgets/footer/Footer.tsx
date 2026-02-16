'use client'
import React from 'react'
import styles from './footer.module.scss'

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.logoContainer}>
				<img
					src='/assets/icon/Logo.svg'
					alt='Logo'
					className={styles.logoImage}
				/>
			</div>
			<div className={styles.textContainer}>
				<h2 className={styles.title}>Креативное агентство 500na700</h2>
			</div>
		</footer>
	)
}

export default Footer
