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
  args: {},
}

