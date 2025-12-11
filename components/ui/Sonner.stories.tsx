import type { Meta, StoryObj } from '@storybook/react'
import { Toaster } from './sonner'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const meta = {
  title: 'UI/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-col gap-4">
        <Button
          onClick={() => toast('Event has been created', { description: 'Monday, January 3rd at 6:00pm' })}
        >
          Show Toast
        </Button>
        <Button
          onClick={() => toast.success('Success!', { description: 'Your changes have been saved.' })}
        >
          Success Toast
        </Button>
        <Button
          onClick={() => toast.error('Error!', { description: 'Something went wrong.' })}
        >
          Error Toast
        </Button>
        <Button
          onClick={() => toast.info('Info', { description: 'This is an info message.' })}
        >
          Info Toast
        </Button>
        <Button
          onClick={() => toast.warning('Warning', { description: 'This is a warning message.' })}
        >
          Warning Toast
        </Button>
      </div>
    </>
  ),
}

