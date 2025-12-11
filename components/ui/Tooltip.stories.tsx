import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from './Tooltip'
import { Button } from './Button'

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const Positions: Story = {
  render: () => (
    <TooltipProvider>
      <div className="grid grid-cols-3 gap-4 p-8">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Top tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Left tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Right tooltip</p>
          </TooltipContent>
        </Tooltip>
        <div />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Bottom tooltip</p>
          </TooltipContent>
        </Tooltip>
        <div />
      </div>
    </TooltipProvider>
  ),
}

export const WithDifferentContent: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Info</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is an informational tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="destructive">Warning</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a warning tooltip</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
}

