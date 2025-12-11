import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, AlertDescription } from './alert'
import { AlertCircle, Info } from 'lucide-react'

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Info className="size-4" />
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>
        This is a default alert message.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertCircle className="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>
        This alert doesn't have an icon.
      </AlertDescription>
    </Alert>
  ),
}

export const WithoutTitle: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Info className="size-4" />
      <AlertDescription>
        This is an alert without a title.
      </AlertDescription>
    </Alert>
  ),
}

