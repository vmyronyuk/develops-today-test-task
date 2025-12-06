import type { Meta, StoryObj } from '@storybook/react'
import ToastContainer from './ToastContainer'
import { useToast } from './hooks/useToast'

const meta: Meta<typeof ToastContainer> = {
	title: 'Components/Toast',
	component: ToastContainer,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ToastContainer>

const ToastDemo = ({
	position,
}: {
	position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}) => {
	const { toasts, addToast, removeToast } = useToast()

	return (
		<div style={{ padding: '40px' }}>
			<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
				<button
					onClick={() =>
						addToast({
							type: 'success',
							message: 'Operation completed successfully!',
						})
					}
					style={{
						padding: '10px 20px',
						background: '#10b981',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
						cursor: 'pointer',
					}}
				>
					Show Success
				</button>
				<button
					onClick={() =>
						addToast({
							type: 'error',
							message: 'Something went wrong. Please try again.',
						})
					}
					style={{
						padding: '10px 20px',
						background: '#ef4444',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
						cursor: 'pointer',
					}}
				>
					Show Error
				</button>
				<button
					onClick={() =>
						addToast({
							type: 'warning',
							message: 'Please review your input before proceeding.',
						})
					}
					style={{
						padding: '10px 20px',
						background: '#f59e0b',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
						cursor: 'pointer',
					}}
				>
					Show Warning
				</button>
				<button
					onClick={() =>
						addToast({
							type: 'info',
							message: 'Here is some helpful information for you.',
						})
					}
					style={{
						padding: '10px 20px',
						background: '#3b82f6',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
						cursor: 'pointer',
					}}
				>
					Show Info
				</button>
				<button
					onClick={() =>
						addToast({
							type: 'success',
							message: 'This toast will stay forever!',
							duration: 0,
							closeable: true,
						})
					}
					style={{
						padding: '10px 20px',
						background: '#8b5cf6',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
						cursor: 'pointer',
					}}
				>
					Persistent Toast
				</button>
				<button
					onClick={() =>
						addToast({
							type: 'info',
							message: 'Quick message - 1 second',
							duration: 1000,
						})
					}
					style={{
						padding: '10px 20px',
						background: '#06b6d4',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
						cursor: 'pointer',
					}}
				>
					Quick Toast (1s)
				</button>
			</div>
			<ToastContainer
				position={position}
				toasts={toasts}
				removeToast={removeToast}
			/>
		</div>
	)
}

export const BottomRight: Story = {
	render: () => <ToastDemo position='bottom-right' />,
}

export const TopRight: Story = {
	render: () => <ToastDemo position='top-right' />,
}

export const BottomLeft: Story = {
	render: () => <ToastDemo position='bottom-left' />,
}

export const TopLeft: Story = {
	render: () => <ToastDemo position='top-left' />,
}
