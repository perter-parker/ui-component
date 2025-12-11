import type { Meta, StoryObj } from '@storybook/react'
import { FeatureSection11 } from './FeatureSection11'
import { Rocket } from 'lucide-react'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection11',
  component: FeatureSection11,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection11>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    headline: "Headline that shows solution's impact on user success",
    description:
      "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.",
    image: 'https://github.com/shadcn.png',
    imageAlt: 'Feature section image',
    features: [
      {
        icon: <Rocket className="size-6" />,
        title: 'Benefit driven feature title',
        description:
          'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
      },
      {
        icon: <Rocket className="size-6" />,
        title: 'Benefit driven feature title',
        description:
          'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
      },
      {
        icon: <Rocket className="size-6" />,
        title: 'Benefit driven feature title',
        description:
          'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
      },
    ],
  },
}

