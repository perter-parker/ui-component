import type { Meta, StoryObj } from '@storybook/react'
import { Rocket, Zap } from 'lucide-react'
import { FeatureSection6 } from './FeatureSection6'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection6',
  component: FeatureSection6,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection6>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    headline: "Headline that shows solution's impact on user success",
    description:
      "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.",
    features: [
      {
        title: "Benefit driven feature title",
        description: "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        icon: <Rocket className="size-5" />,
      },
      {
        title: "Benefit driven feature title",
        description: "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        icon: <Zap className="size-5" />,
      },
    ],
    primaryAction: {
      label: 'Get access',
      onClick: () => console.log('Get access clicked'),
    },
    secondaryAction: {
      label: 'Learn more',
      onClick: () => console.log('Learn more clicked'),
    },
    image: 'https://github.com/shadcn.png',
    imageAlt: 'Feature section image',
  },
}
