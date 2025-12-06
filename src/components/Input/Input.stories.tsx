import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
			options: ['text', 'password', 'email', 'number', 'tel', 'url'],
		},
		clearable: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
	},
}

export default meta
type Story = StoryObj<typeof Input>

export const Text: Story = {
	args: {
		type: 'text',
		placeholder: 'Enter text...',
		label: 'Username',
	},
}

export const WithClearable: Story = {
	args: {
		type: 'text',
		placeholder: 'Type something...',
		label: 'Clearable Input',
		clearable: true,
		defaultValue: 'Clear me!',
	},
}

export const Password: Story = {
	args: {
		type: 'password',
		placeholder: 'Enter password...',
		label: 'Password',
		defaultValue: 'secretpassword',
	},
}

export const PasswordWithClearable: Story = {
	args: {
		type: 'password',
		placeholder: 'Enter password...',
		label: 'Password',
		clearable: true,
		defaultValue: 'secretpassword',
	},
}

export const Email: Story = {
	args: {
		type: 'email',
		placeholder: 'your@email.com',
		label: 'Email Address',
		clearable: true,
	},
}

export const Number: Story = {
	args: {
		type: 'number',
		placeholder: '0',
		label: 'Age',
		clearable: true,
	},
}

export const WithError: Story = {
	args: {
		type: 'text',
		placeholder: 'Enter username...',
		label: 'Username',
		error: 'This field is required',
		defaultValue: '',
	},
}

export const Disabled: Story = {
	args: {
		type: 'text',
		placeholder: 'Disabled input',
		label: 'Disabled Field',
		disabled: true,
		defaultValue: 'Cannot edit',
	},
}

export const DisabledPassword: Story = {
	args: {
		type: 'password',
		placeholder: 'Disabled password',
		label: 'Password',
		disabled: true,
		defaultValue: 'secretpass',
	},
}
