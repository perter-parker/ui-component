import type { Meta, StoryObj } from '@storybook/react'
import { BlogSection1 } from './BlogSection1'

const meta = {
  title: 'Blocks/Marketing/Blogs/BlogSection1',
  component: BlogSection1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogSection1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

