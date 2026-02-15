export interface News {
	id: string
	title: string
	description: string
	content: string
	image: string
	date: string
	category?: string
}

export interface FeedbackForm {
	name: string
	email: string
	phone: string
	message: string
}
