import type { Meta, StoryObj } from '@storybook/react'
import { ErrorSection1 } from './ErrorSection1'

const meta = {
  title: 'Blocks/Marketing/Errors/ErrorSection1',
  component: ErrorSection1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorSection1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

