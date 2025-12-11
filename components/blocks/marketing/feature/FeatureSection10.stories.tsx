import type { Meta, StoryObj } from '@storybook/react'
import { FeatureSection10 } from './FeatureSection10'
import { Rocket } from 'lucide-react'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection10',
  component: FeatureSection10,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection10>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

