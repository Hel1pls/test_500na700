'use client'
import React, { useEffect, useState } from 'react'
import styles from './ContactPopup.module.scss'
import { Input } from '@shared/ui/Input'
import { Checkbox } from '@shared/ui/Checkbox'
import { Button } from '@shared/ui/Button'

const ContactPopup: React.FC = () => {
	const [open, setOpen] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		consent: false,
	})
	const [errors, setErrors] = useState({
		name: '',
		phone: '',
		email: '',
		consent: '',
	})
	const [isSubmitted, setIsSubmitted] = useState(false)

	useEffect(() => {
		const handler = () => setOpen(true)
		window.addEventListener('openContactPopup', handler)
		return () => window.removeEventListener('openContactPopup', handler)
	}, [])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
		if (isSubmitted) {
			setErrors(prev => ({ ...prev, [name]: '' }))
		}
	}

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target
		setFormData(prev => ({ ...prev, consent: checked }))
		if (isSubmitted) {
			setErrors(prev => ({ ...prev, consent: '' }))
		}
	}

	const validateForm = () => {
		const newErrors = {
			name: '',
			phone: '',
			email: '',
			consent: '',
		}

		if (!formData.name.trim()) {
			newErrors.name = 'Имя обязательно'
		}

		if (!formData.phone.trim()) {
			newErrors.phone = 'Телефон обязателен'
		} else if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(formData.phone)) {
			newErrors.phone = 'Введите полный номер в формате +7 (999) 999-99-99'
		}

		if (!formData.email.trim()) {
			newErrors.email = 'E-mail обязателен'
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Введите корректный email (пример: name@domain.com)'
		}

		if (!formData.consent) {
			newErrors.consent = 'Необходимо согласие на обработку персональных данных'
		}

		return newErrors
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitted(true)
		const newErrors = validateForm()
		setErrors(newErrors)

		const hasErrors = Object.values(newErrors).some(error => error !== '')
		if (!hasErrors) {
			console.log('Отправленные данные:', formData)
			// Сброс формы и закрытие попапа (по желанию)
			setFormData({ name: '', phone: '', email: '', consent: false })
			setOpen(false)
			setIsSubmitted(false)
		}
	}

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

				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputsWrapper}>
						<div className={styles.fieldWrapper}>
							<Input
								type='text'
								name='name'
								placeholder='Имя'
								value={formData.name}
								onChange={handleInputChange}
								error={isSubmitted ? errors.name : ''}
								required
							/>
						</div>

						<div className={styles.fieldWrapper}>
							<Input
								type='tel'
								name='phone'
								placeholder='Телефон'
								value={formData.phone}
								onChange={handleInputChange}
								error={isSubmitted ? errors.phone : ''}
								required
							/>
						</div>

						<div className={styles.fieldWrapper}>
							<Input
								type='email'
								name='email'
								placeholder='E-mail'
								value={formData.email}
								onChange={handleInputChange}
								error={isSubmitted ? errors.email : ''}
								required
							/>
						</div>
					</div>

					<div className={styles.fieldWrapper}>
						<Checkbox
							label='Я согласен (-а) на обработку персональных данных'
							checked={formData.consent}
							onChange={handleCheckboxChange}
						/>
						{isSubmitted && errors.consent && (
							<span className={styles.error}>{errors.consent}</span>
						)}
					</div>

					<Button variant='black' type='submit' className={styles.submitBtn}>
						Отправить
					</Button>
				</form>
			</div>
		</div>
	)
}

export default ContactPopup
