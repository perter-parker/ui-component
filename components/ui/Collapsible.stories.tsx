import type { Meta, StoryObj } from '@storybook/react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './collapsible'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

const meta = {
  title: 'UI/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <Collapsible open={open} onOpenChange={setOpen} className="w-[350px]">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="px-4 py-2 text-sm text-muted-foreground">
          <span>@radix-ui/primitives</span>
        </div>
        <CollapsibleContent className="space-y-2 px-4">
          <div className="rounded-md border px-4 py-2 text-sm">
            @radix-ui/react-accordion
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">
            @radix-ui/react-dialog
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">
            @radix-ui/react-popover
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}

