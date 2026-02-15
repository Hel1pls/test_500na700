import React from 'react'
import styles from './link.module.scss'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	muted?: boolean
}

export const Link: React.FC<Props> = ({
	className = '',
	muted = false,
	children,
	...rest
}) => {
	const cls = [styles.link, muted ? styles['link--muted'] : '', className]
		.filter(Boolean)
		.join(' ')

	return (
		<a className={cls} {...rest}>
			{children}
		</a>
	)
}

export default Link
