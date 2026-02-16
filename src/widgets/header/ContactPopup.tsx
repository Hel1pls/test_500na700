'use client'
import React, { useEffect, useState } from 'react'
import styles from './ContactPopup.module.scss'
import { Input } from '@shared/ui/Input'
import { Checkbox } from '@shared/ui/Checkbox'
import { Button } from '@shared/ui/Button'

const ContactPopup: React.FC = () => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const handler = () => setOpen(true)
		window.addEventListener('openContactPopup', handler)
		return () => window.removeEventListener('openContactPopup', handler)
	}, [])

	if (!open) return null

	return (
		<div className={styles.overlay}>
			<div className={styles.popup}>
				<div className={styles.titleBlock}>
					<h2 className={styles.title}>Связаться с нами</h2>
					<button className={styles.close} onClick={() => setOpen(false)}>
						&times;
					</button>
				</div>

				<form className={styles.form} onSubmit={e => e.preventDefault()}>
					<div className={styles.inputsWrapper}>
						<Input type='text' placeholder='Имя' required />
						<Input type='tel' placeholder='Телефон' required />
						<Input type='email' placeholder='E-mail' required />
					</div>
					<Checkbox label='Я согласен (-а) на обработку персональных данных' />
					<Button variant='black' type='submit' className={styles.submitBtn}>
						Отправить
					</Button>
				</form>
			</div>
		</div>
	)
}

export default ContactPopup
