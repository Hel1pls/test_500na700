'use client'
import React from 'react'
import styles from './input.module.scss'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: React.ReactNode
	dashed?: boolean
	error?: string
}

export const Input: React.FC<Props> = ({
	label,
	dashed = false,
	error,
	...rest
}) => {
	const wrapper = dashed ? styles.inputDashedContainer : ''

	return (
		<div className={wrapper}>
			<div className={styles.inputRoot}>
				{label && <div className={styles.inputLabel}>{label}</div>}
				<div
					className={`${styles.inputBox} ${error ? styles.inputBoxError : ''}`}
				>
					<input className={styles.inputField} {...rest} />
				</div>
				{error && <div className={styles.errorMessage}>{error}</div>}
			</div>
		</div>
	)
}

export default Input
