import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection11 } from './HeroSection11'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection11',
  component: HeroSection11,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection11>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    headline: "Headline that solves user's main problem",
    description:
      "Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.",
    features: [
      {
        title: "Benefit driven feature title",
      },
      {
        title: "Benefit driven feature title",
      },
      {
        title: "Benefit driven feature title",
      },
    ],
    primaryAction: {
      label: 'Get started',
      onClick: () => console.log('Get started clicked'),
    },
    secondaryAction: {
      label: 'Explore',
      onClick: () => console.log('Explore clicked'),
    },
    image: undefined,
    imageAlt: 'Hero section',
  },
}
