import React, { useCallback, useEffect, useState } from 'react'
import './Toast.css'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
	id: string
	type: ToastType
	message: string
	duration?: number
	onClose: (id: string) => void
	closeable?: boolean
}

const Toast: React.FC<ToastProps> = ({
	id,
	type,
	message,
	duration = 3000,
	onClose,
	closeable = true,
}) => {
	const [isExiting, setIsExiting] = useState(false)

	const handleClose = useCallback(() => {
		setIsExiting(true)
		setTimeout(() => {
			onClose(id)
		}, 300)
	}, [id, onClose])

	useEffect(() => {
		if (duration > 0) {
			const timer = setTimeout(() => {
				handleClose()
			}, duration)

			return () => clearTimeout(timer)
		}
	}, [duration, handleClose])

	const getIcon = () => {
		switch (type) {
			case 'success':
				return '✓'
			case 'error':
				return '✕'
			case 'warning':
				return '⚠'
			case 'info':
				return 'ℹ'
			default:
				return ''
		}
	}

	return (
		<div
			className={`toast toast-${type} ${
				isExiting ? 'toast-exit' : 'toast-enter'
			}`}
		>
			<div className='toast-icon'>{getIcon()}</div>
			<div className='toast-message'>{message}</div>
			{closeable && (
				<button
					className='toast-close'
					onClick={handleClose}
					aria-label='Close'
				>
					✖
				</button>
			)}
		</div>
	)
}

export default Toast
