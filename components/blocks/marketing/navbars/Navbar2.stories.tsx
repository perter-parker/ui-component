import type { Meta, StoryObj } from '@storybook/react'
import { Navbar2 } from './Navbar2'

const meta = {
  title: 'Blocks/Marketing/Navbars/Navbar2',
  component: Navbar2,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar2>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

