import type { Meta, StoryObj } from '@storybook/react'
import { Navbar1 } from './Navbar1'

const meta = {
  title: 'Blocks/Marketing/Navbars/Navbar1',
  component: Navbar1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

