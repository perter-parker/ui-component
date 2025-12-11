import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection10 } from './HeroSection10'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection10',
  component: HeroSection10,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection10>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    headline: "Headline that solves user's main problem",
    description:
      "Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.",
    primaryAction: {
      label: 'Get started',
      onClick: () => console.log('Get started clicked'),
    },
    image: 'https://github.com/shadcn.png',
    imageAlt: 'Hero section image',
    socialProof: "Loved by 20K+ creators, including teams at:",
    logos: [
      { name: "NEXT.js" },
      { name: "NEXT.js" },
      { name: "NEXT.js" },
      { name: "NEXT.js" },
      { name: "NEXT.js" },
    ],
  },
}

