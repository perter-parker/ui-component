import type { Meta, StoryObj } from '@storybook/react'
import { TestimonialSection4 } from './TestimonialSection4'

const meta = {
  title: 'Blocks/Marketing/Testimonials/TestimonialSection4',
  component: TestimonialSection4,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TestimonialSection4>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

