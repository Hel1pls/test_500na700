declare module 'react-input-mask' {
	import React from 'react'

	interface InputMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
		mask: string
		maskChar?: string
		alwaysShowMask?: boolean
		beforeMaskedValueChange?: (
			newState: any,
			oldState: any,
			userInput: string,
			maskOptions: any,
		) => any
		children?: (inputProps: any) => React.ReactNode
	}

	const InputMask: React.FC<InputMaskProps>
	export default InputMask
}
