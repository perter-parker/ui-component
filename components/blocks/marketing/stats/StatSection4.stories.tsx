import type { Meta, StoryObj } from '@storybook/react'
import { StatSection4 } from './StatSection4'

const meta = {
  title: 'Blocks/Marketing/Stats/StatSection4',
  component: StatSection4,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatSection4>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

