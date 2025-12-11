import type { Meta, StoryObj } from '@storybook/react'
import { LogoSection1 } from './LogoSection1'

const meta = {
  title: 'Blocks/Marketing/Logos/LogoSection1',
  component: LogoSection1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoSection1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

