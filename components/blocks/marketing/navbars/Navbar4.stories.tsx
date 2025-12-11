import type { Meta, StoryObj } from '@storybook/react'
import { Navbar4 } from './Navbar4'

const meta = {
  title: 'Blocks/Marketing/Navbars/Navbar4',
  component: Navbar4,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar4>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

