'use client'
import React from 'react'
import styles from './button.module.scss'

type Variant = 'white' | 'black'
type Size = 'normal' | 'large'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: Variant
	size?: Size
}

export const Button: React.FC<Props> = ({
	variant = 'white',
	size = 'normal',
	className = '',
	children,
	...rest
}) => {
	const cls = [
		styles.btn,
		styles[`btn--${variant}`],
		styles[`btn--${size}`],
		className,
	]
		.filter(Boolean)
		.join(' ')

	return (
		<button className={cls} {...rest}>
			{children}
		</button>
	)
}

export default Button
