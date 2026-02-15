import React from 'react'
import styles from './button.module.scss'

type Variant = 'white' | 'black'
type Size = 'normal' | 'large'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: Variant
	size?: Size
	outline?: boolean
}

export const Button: React.FC<Props> = ({
	variant = 'white',
	size = 'normal',
	outline = false,
	className = '',
	children,
	...rest
}) => {
	const cls = [
		styles.btn,
		outline ? styles['btn--outline'] : '',
		variant === 'white' ? styles['btn--white'] : styles['btn--black'],
		size === 'large' ? styles['btn--large'] : styles['btn--normal'],
		className,
	]
		.filter(Boolean)
		.join(' ')

	return (
		<button className={cls} {...rest}>
			<span className={styles.btnInner}>{children}</span>
		</button>
	)
}

export default Button
