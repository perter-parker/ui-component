import type { Meta, StoryObj } from '@storybook/react'
import { FooterSection2 } from './FooterSection2'

const meta = {
  title: 'Blocks/Marketing/Footers/FooterSection2',
  component: FooterSection2,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FooterSection2>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

