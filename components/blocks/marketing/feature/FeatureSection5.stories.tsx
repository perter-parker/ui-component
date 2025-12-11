import type { Meta, StoryObj } from '@storybook/react'
import { Rocket, Zap, Shield, Sparkles } from 'lucide-react'
import { FeatureSection5 } from './FeatureSection5'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection5',
  component: FeatureSection5,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection5>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
