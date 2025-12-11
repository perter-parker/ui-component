import type { Meta, StoryObj } from '@storybook/react'
import { TeamSection1 } from './TeamSection1'

const meta = {
  title: 'Blocks/Marketing/Teams/TeamSection1',
  component: TeamSection1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TeamSection1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

