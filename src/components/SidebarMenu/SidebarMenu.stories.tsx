import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import SidebarMenu from './SidebarMenu'
import type { MenuItem } from './types'

const meta: Meta<typeof SidebarMenu> = {
	title: 'Components/SidebarMenu',
	component: SidebarMenu,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SidebarMenu>

const simpleItems: MenuItem[] = [
	{ id: '1', label: 'Dashboard', icon: '🏠' },
	{ id: '2', label: 'Profile', icon: '👤' },
	{ id: '3', label: 'Settings', icon: '⚙️' },
	{ id: '4', label: 'Help', icon: '❓' },
	{ id: '5', label: 'Logout', icon: '🚪' },
]

const nestedItems: MenuItem[] = [
	{ id: '1', label: 'Dashboard', icon: '🏠' },
	{
		id: '2',
		label: 'Products',
		icon: '📦',
		items: [
			{ id: '2-1', label: 'All Products', icon: '📋' },
			{ id: '2-2', label: 'Add New', icon: '➕' },
			{ id: '2-3', label: 'Categories', icon: '🏷️' },
		],
	},
	{
		id: '3',
		label: 'Orders',
		icon: '🛒',
		items: [
			{ id: '3-1', label: 'Active Orders', icon: '✅' },
			{ id: '3-2', label: 'Pending', icon: '⏳' },
			{ id: '3-3', label: 'Completed', icon: '✔️' },
		],
	},
	{ id: '4', label: 'Analytics', icon: '📊' },
	{ id: '5', label: 'Settings', icon: '⚙️' },
]

const deeplyNestedItems: MenuItem[] = [
	{ id: '1', label: 'Home', icon: '🏠' },
	{
		id: '2',
		label: 'Company',
		icon: '🏢',
		items: [
			{ id: '2-1', label: 'About Us', icon: 'ℹ️' },
			{
				id: '2-2',
				label: 'Team',
				icon: '👥',
				items: [
					{ id: '2-2-1', label: 'Engineering', icon: '⚙️' },
					{ id: '2-2-2', label: 'Design', icon: '🎨' },
					{ id: '2-2-3', label: 'Marketing', icon: '📢' },
				],
			},
			{ id: '2-3', label: 'Careers', icon: '💼' },
		],
	},
	{
		id: '3',
		label: 'Resources',
		icon: '📚',
		items: [
			{
				id: '3-1',
				label: 'Documentation',
				icon: '📖',
				items: [
					{ id: '3-1-1', label: 'Getting Started', icon: '🚀' },
					{ id: '3-1-2', label: 'API Reference', icon: '🔌' },
					{ id: '3-1-3', label: 'Tutorials', icon: '🎓' },
				],
			},
			{ id: '3-2', label: 'Blog', icon: '✍️' },
			{ id: '3-3', label: 'Support', icon: '🆘' },
		],
	},
	{ id: '4', label: 'Contact', icon: '📧' },
]

const SidebarDemo = ({
	items,
	title,
}: {
	items: MenuItem[]
	title?: string
}) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div style={{ padding: '40px', height: '100vh' }}>
			<button
				onClick={() => setIsOpen(true)}
				style={{
					padding: '12px 24px',
					background: '#3b82f6',
					color: 'white',
					border: 'none',
					borderRadius: '8px',
					cursor: 'pointer',
					fontSize: '16px',
					fontWeight: '500',
				}}
			>
				Open Sidebar Menu
			</button>
			<div style={{ marginTop: '20px', color: '#6b7280' }}>
				<p>Click the button to open the sidebar menu</p>
				<p>You can close it by:</p>
				<ul>
					<li>Clicking the X button</li>
					<li>Clicking outside the menu</li>
					<li>Pressing the Escape key</li>
				</ul>
			</div>
			<SidebarMenu
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				items={items}
				title={title}
			/>
		</div>
	)
}

export const SimpleMenu: Story = {
	render: () => <SidebarDemo items={simpleItems} title='Navigation' />,
}

export const NestedMenu: Story = {
	render: () => <SidebarDemo items={nestedItems} title='Admin Panel' />,
}

export const DeeplyNestedMenu: Story = {
	render: () => <SidebarDemo items={deeplyNestedItems} title='Main Menu' />,
}

const OpenDefaultWrapper = () => {
	const [isOpen] = useState(true)

	return (
		<div style={{ height: '100vh' }}>
			<SidebarMenu
				isOpen={isOpen}
				onClose={() => {}}
				items={nestedItems}
				title='Always Open'
			/>
		</div>
	)
}

export const OpenByDefault: Story = {
	render: () => <OpenDefaultWrapper />,
}
