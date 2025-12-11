import type { Meta, StoryObj } from '@storybook/react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './Sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import * as React from 'react'

const meta = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@johndoe" />
            </div>
          </div>
          <SheetFooter>
            <Button onClick={() => setOpen(false)}>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  },
}

export const Sides: Story = {
  render: () => {
    const [open, setOpen] = React.useState<string | null>(null)
    return (
      <div className="flex gap-4">
        <Sheet open={open === 'left'} onOpenChange={(o) => setOpen(o ? 'left' : null)}>
          <SheetTrigger asChild>
            <Button>Left</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Left Side Sheet</SheetTitle>
              <SheetDescription>This sheet opens from the left.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet open={open === 'right'} onOpenChange={(o) => setOpen(o ? 'right' : null)}>
          <SheetTrigger asChild>
            <Button>Right</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Right Side Sheet</SheetTitle>
              <SheetDescription>This sheet opens from the right.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet open={open === 'top'} onOpenChange={(o) => setOpen(o ? 'top' : null)}>
          <SheetTrigger asChild>
            <Button>Top</Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Top Side Sheet</SheetTitle>
              <SheetDescription>This sheet opens from the top.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet open={open === 'bottom'} onOpenChange={(o) => setOpen(o ? 'bottom' : null)}>
          <SheetTrigger asChild>
            <Button>Bottom</Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Bottom Side Sheet</SheetTitle>
              <SheetDescription>This sheet opens from the bottom.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    )
  },
}

