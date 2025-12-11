import type { Meta, StoryObj } from '@storybook/react'
import { HeaderSection6 } from './HeaderSection6'

const meta = {
  title: 'Blocks/Marketing/Headers/HeaderSection6',
  component: HeaderSection6,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderSection6>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

