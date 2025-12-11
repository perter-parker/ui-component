import type { Meta, StoryObj } from '@storybook/react'
import { BentoGridSection1 } from './BentoGridSection1'

const meta = {
  title: 'Blocks/Marketing/BentoGrids/BentoGridSection1',
  component: BentoGridSection1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BentoGridSection1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

