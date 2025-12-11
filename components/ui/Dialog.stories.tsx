import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog'
import { Button } from '@/components/ui/button'
import * as React from 'react'

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a dialog description. You can add any content here.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>Dialog content goes here.</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}

export const WithoutFooter: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Simple Dialog</DialogTitle>
            <DialogDescription>
              This dialog doesn't have a footer.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>Content here.</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  },
}

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Open Long Dialog</Button>
        </DialogTrigger>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Long Content Dialog</DialogTitle>
            <DialogDescription>
              This dialog contains a lot of content.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>
                Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}

