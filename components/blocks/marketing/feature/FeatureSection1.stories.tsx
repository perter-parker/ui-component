import type { Meta, StoryObj } from '@storybook/react'
import { FeatureSection1 } from './FeatureSection1'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection1',
  component: FeatureSection1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

