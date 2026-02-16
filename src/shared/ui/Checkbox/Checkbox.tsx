'use client'
import React, { useState } from 'react'
import styles from './checkbox.module.scss'

type Props = {
	label?: React.ReactNode
	title?: boolean
	muted?: boolean
	dashed?: boolean
	defaultChecked?: boolean
	checked?: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<Props> = ({
	label,
	title = false,
	muted = false,
	dashed = false,
	defaultChecked = false,
	checked,
	onChange,
}) => {
	const [internalChecked, setInternalChecked] =
		useState<boolean>(!!defaultChecked)
	const isControlled = checked !== undefined
	const currentChecked = isControlled ? checked : internalChecked

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!isControlled) {
			setInternalChecked(e.target.checked)
		}
		onChange?.(e)
	}

	return (
		<div className={dashed ? styles.checkboxDashedContainer : ''}>
			<label className={styles.checkboxWrapper}>
				<input
					className={styles.checkboxInput}
					type='checkbox'
					checked={currentChecked}
					onChange={handleChange}
				/>

				<span
					className={`${styles.checkboxBox} ${
						currentChecked ? styles.checkboxBoxChecked : ''
					}`}
				>
					{currentChecked && (
						<svg
							className={styles.checkmark}
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M5 12l4 4L19 6'
								stroke='white'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					)}
				</span>

				<span
					className={`${styles.checkboxLabel} ${
						title ? styles.checkboxTitle : ''
					} ${muted ? styles.checkboxNormal : ''}`}
				>
					{label}
				</span>
			</label>
		</div>
	)
}

export default Checkbox
