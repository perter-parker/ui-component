import type { Meta, StoryObj } from '@storybook/react'
import { Navbar5 } from './Navbar5'

const meta = {
  title: 'Blocks/Marketing/Navbars/Navbar5',
  component: Navbar5,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar5>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

