import { type FC } from 'react'
import Toast from './Toast'
import './Toast.css'
import type { ToastItem } from './types'

type ToastContainerProps = {
	position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

const ToastContainer: FC<
	ToastContainerProps & {
		toasts: ToastItem[]
		removeToast: (id: string) => void
	}
> = ({ position = 'bottom-right', toasts, removeToast }) => {
	return (
		<div className={`toast-container toast-container-${position}`}>
			{toasts.map(toast => (
				<Toast
					key={toast.id}
					id={toast.id}
					type={toast.type}
					message={toast.message}
					duration={toast.duration}
					closeable={toast.closeable}
					onClose={removeToast}
				/>
			))}
		</div>
	)
}

export default ToastContainer
