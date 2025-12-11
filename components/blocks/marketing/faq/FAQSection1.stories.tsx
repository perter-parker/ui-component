import type { Meta, StoryObj } from '@storybook/react'
import { FAQSection1 } from './FAQSection1'

const meta = {
  title: 'Blocks/Marketing/FAQ/FAQSection1',
  component: FAQSection1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FAQSection1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

