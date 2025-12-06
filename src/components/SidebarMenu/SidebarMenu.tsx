import React, { useEffect, useState, type FC } from 'react'
import './SidebarMenu.css'
import type { MenuItem } from './types'

export type SidebarMenuProps = {
	isOpen: boolean
	onClose: () => void
	items: MenuItem[]
	title?: string
}

const SidebarMenuItem: FC<{
	item: MenuItem
	level: number
}> = ({ item, level }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const hasChildren = item.items && item.items.length > 0

	return (
		<div className={`sidebar-menu-item level-${level}`}>
			<div
				className={`sidebar-menu-label ${hasChildren ? 'has-children' : ''} ${
					isExpanded ? 'expanded' : ''
				}`}
				onClick={() => hasChildren && setIsExpanded(!isExpanded)}
			>
				{item.icon && <span className='sidebar-menu-icon'>{item.icon}</span>}
				<span className='sidebar-menu-text'>{item.label}</span>
				{hasChildren && (
					<span className='sidebar-menu-arrow'>{isExpanded ? '▼' : '▶'}</span>
				)}
			</div>
			{hasChildren && isExpanded && (
				<div className='sidebar-menu-submenu'>
					{item.items!.map(child => (
						<SidebarMenuItem key={child.id} item={child} level={level + 1} />
					))}
				</div>
			)}
		</div>
	)
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
	isOpen,
	onClose,
	items,
	title = 'Menu',
}) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose()
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [isOpen, onClose])

	return (
		<>
			<div
				className={`sidebar-overlay ${isOpen ? 'sidebar-overlay-visible' : ''}`}
				onClick={onClose}
			/>
			<div className={`sidebar-menu ${isOpen ? 'sidebar-menu-open' : ''}`}>
				<div className='sidebar-header'>
					<h2 className='sidebar-title'>{title}</h2>
					<button
						className='sidebar-close'
						onClick={onClose}
						aria-label='Close menu'
					>
						✖
					</button>
				</div>
				<div className='sidebar-content'>
					{items.map(item => (
						<SidebarMenuItem key={item.id} item={item} level={0} />
					))}
				</div>
			</div>
		</>
	)
}

export default SidebarMenu
