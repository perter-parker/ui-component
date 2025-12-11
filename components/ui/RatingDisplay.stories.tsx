import type { Meta, StoryObj } from '@storybook/react'
import { RatingDisplay } from './RatingDisplay'

const meta = {
  title: 'UI/RatingDisplay',
  component: RatingDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RatingDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    rating: 4.5,
    reviews: 123,
  },
}

export const HighRating: Story = {
  args: {
    rating: 4.9,
    reviews: 1234,
  },
}

export const LowRating: Story = {
  args: {
    rating: 3.2,
    reviews: 45,
  },
}

export const ManyReviews: Story = {
  args: {
    rating: 4.7,
    reviews: 10000,
  },
}

