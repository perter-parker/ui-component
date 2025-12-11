import type { Meta, StoryObj } from '@storybook/react'
import { FeatureSection9 } from './FeatureSection9'
import { Rocket } from 'lucide-react'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection9',
  component: FeatureSection9,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection9>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

