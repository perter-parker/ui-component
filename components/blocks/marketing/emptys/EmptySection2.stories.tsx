import type { Meta, StoryObj } from '@storybook/react'
import { EmptySection2 } from './EmptySection2'

const meta = {
  title: 'Blocks/Marketing/Emptys/EmptySection2',
  component: EmptySection2,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptySection2>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

