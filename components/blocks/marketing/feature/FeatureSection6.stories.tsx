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
  args: {},
}
