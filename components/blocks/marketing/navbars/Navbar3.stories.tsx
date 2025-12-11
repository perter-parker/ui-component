import type { Meta, StoryObj } from '@storybook/react'
import { Navbar3 } from './Navbar3'

const meta = {
  title: 'Blocks/Marketing/Navbars/Navbar3',
  component: Navbar3,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar3>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

