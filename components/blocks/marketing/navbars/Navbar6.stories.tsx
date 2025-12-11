import type { Meta, StoryObj } from '@storybook/react'
import { Navbar6 } from './Navbar6'

const meta = {
  title: 'Blocks/Marketing/Navbars/Navbar6',
  component: Navbar6,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar6>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

