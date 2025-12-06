import type { InputHTMLAttributes } from 'react'
import React, { forwardRef, useState } from 'react'
import './Input.css'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
	clearable?: boolean
	label?: string
	error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const {
		type = 'text',
		clearable = false,
		label,
		error,
		className = '',
		value: controlledValue,
		disabled,
		...rest
	} = props

	const isControlled = controlledValue !== undefined
	const [internalValue, setInternalValue] = useState<string>('')
	const [visible, setVisible] = useState(false)

	const currentValue = isControlled
		? (controlledValue as string)
		: internalValue
	const isPassword = type === 'password'

	const handleClear = () => {
		if (!isControlled) {
			setInternalValue('')
		}

		if (rest.onChange) {
			const syntheticEvent = {
				target: { value: '' },
				currentTarget: { value: '' },
			} as React.ChangeEvent<HTMLInputElement>
			rest.onChange(syntheticEvent)
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!isControlled) {
			setInternalValue(e.target.value)
		}
		rest.onChange?.(e)
	}

	return (
		<div className={`input-container ${className}`}>
			{label && <label className='input-label'>{label}</label>}
			<div
				className={`input-wrapper ${error ? 'input-error' : ''} ${
					disabled ? 'input-disabled' : ''
				}`}
			>
				<input
					{...rest}
					ref={ref}
					type={isPassword ? (visible ? 'text' : 'password') : type}
					className='input-field'
					value={currentValue}
					onChange={handleChange}
					disabled={disabled}
				/>
				{isPassword && (
					<button
						aria-label={visible ? 'Hide password' : 'Show password'}
						className='input-icon'
						onClick={() => setVisible(s => !s)}
						type='button'
						tabIndex={-1}
						disabled={disabled}
					>
						{visible ? '🙈' : '👁️'}
					</button>
				)}
				{clearable && currentValue && currentValue.length > 0 && !disabled && (
					<button
						className='input-clear'
						onClick={handleClear}
						type='button'
						aria-label='Clear'
						tabIndex={-1}
					>
						✖
					</button>
				)}
			</div>
			{error && <span className='input-error-text'>{error}</span>}
		</div>
	)
})

Input.displayName = 'Input'

export default Input
