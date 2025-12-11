import type { Meta, StoryObj } from '@storybook/react'
import { BannerSection1 } from './BannerSection1'

const meta = {
  title: 'Blocks/Marketing/Banners/BannerSection1',
  component: BannerSection1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BannerSection1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

