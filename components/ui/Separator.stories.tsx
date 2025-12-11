import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './separator'

const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Separator />,
}

export const Horizontal: Story = {
  render: () => (
    <div className="w-[400px]">
      <div className="py-4">위쪽 콘텐츠</div>
      <Separator orientation="horizontal" />
      <div className="py-4">아래쪽 콘텐츠</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center h-20 gap-4">
      <div>왼쪽</div>
      <Separator orientation="vertical" />
      <div>오른쪽</div>
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <div className="w-[300px]">
      <div className="py-2">항목 1</div>
      <Separator />
      <div className="py-2">항목 2</div>
      <Separator />
      <div className="py-2">항목 3</div>
      <Separator />
      <div className="py-2">항목 4</div>
    </div>
  ),
}

