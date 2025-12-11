import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection6 } from './HeroSection6'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection6',
  component: HeroSection6,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection6>

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
    backgroundImage: 'https://wrtn-image-user-upload.s3.ap-northeast-2.amazonaws.com/blog/6492401f0519cbfb1f5b18d9/395d496b-a254-48f8-8152-2a8f54bb6ad1',
    backgroundImageAlt: 'Hero background',
    variant: 'light',
  },
}

export const Dark: Story = {
  args: {
    headline: "Headline that solves user's main problem",
    description:
      "Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.",
    primaryAction: {
      label: 'Get started',
      onClick: () => console.log('Get started clicked'),
    },
    backgroundImage: 'https://wrtn-image-user-upload.s3.ap-northeast-2.amazonaws.com/blog/6492401f0519cbfb1f5b18d9/395d496b-a254-48f8-8152-2a8f54bb6ad1',
    backgroundImageAlt: 'Hero background',
    variant: 'dark',
  },
}

