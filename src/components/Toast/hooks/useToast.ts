import { useCallback, useState } from 'react'
import type { ToastItem } from '../types'

export const useToast = () => {
	const [toasts, setToasts] = useState<ToastItem[]>([])

	const addToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
		const id = Math.random().toString(36).substr(2, 9)
		setToasts(prev => [...prev, { ...toast, id }])
	}, [])

	const removeToast = useCallback((id: string) => {
		setToasts(prev => prev.filter(toast => toast.id !== id))
	}, [])

	return { toasts, addToast, removeToast }
}
