import React from 'react'
import styles from './link.module.scss'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	variant?: 'title' | 'normal'
	muted?: boolean
	hoverable?: boolean
}

export const Link: React.FC<Props> = ({
	variant = 'normal',
	muted = false,
	hoverable = false,
	className = '',
	children,
	...rest
}) => {
	const cls = [
		styles.link,
		variant === 'title' ? styles['link--title'] : styles['link--normal'],
		muted ? styles['link--muted'] : '',
		hoverable ? styles['link--hoverable'] : '',
		className,
	]
		.filter(Boolean)
		.join(' ')

	return (
		<a className={cls} {...rest}>
			{children}
		</a>
	)
}

export default Link
