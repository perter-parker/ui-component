import type { Meta, StoryObj } from '@storybook/react'
import { ComparisonSection1 } from './ComparisonSection1'

const meta = {
  title: 'Blocks/Marketing/Comparisons/ComparisonSection1',
  component: ComparisonSection1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComparisonSection1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

