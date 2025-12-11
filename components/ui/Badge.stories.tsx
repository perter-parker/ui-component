import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge>
        <CheckCircle className="size-3" />
        Success
      </Badge>
      <Badge variant="destructive">
        <XCircle className="size-3" />
        Error
      </Badge>
      <Badge variant="secondary">
        <AlertCircle className="size-3" />
        Warning
      </Badge>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge>Small Text</Badge>
      <Badge>Normal Badge</Badge>
      <Badge className="text-sm px-3 py-1">Custom Size</Badge>
    </div>
  ),
}

