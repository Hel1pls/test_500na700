'use client'
import React from 'react'
import styles from './input.module.scss'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: React.ReactNode
	dashed?: boolean
}

export const Input: React.FC<Props> = ({ label, dashed = false, ...rest }) => {
	const wrapper = dashed ? styles.inputDashedContainer : ''

	return (
		<div className={wrapper}>
			<div className={styles.inputRoot}>
				{label && <div className={styles.inputLabel}>{label}</div>}
				<div className={styles.inputBox}>
					<input className={styles.inputField} {...rest} />
				</div>
			</div>
		</div>
	)
}

export default Input
