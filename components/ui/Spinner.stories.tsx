import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Spinner />,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-12" />
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <button className="flex items-center gap-2 px-4 py-2 border rounded">
        <Spinner className="size-4" />
        Loading...
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded">
        <Spinner className="size-4" />
        Processing
      </button>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-6 text-primary" />
      <Spinner className="size-6 text-destructive" />
      <Spinner className="size-6 text-muted-foreground" />
    </div>
  ),
}

