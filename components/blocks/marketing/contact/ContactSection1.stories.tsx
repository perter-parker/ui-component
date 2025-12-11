import type { Meta, StoryObj } from '@storybook/react'
import { ContactSection1 } from './ContactSection1'

const meta = {
  title: 'Blocks/Marketing/Contact/ContactSection1',
  component: ContactSection1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactSection1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

