import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Progress } from './Progress'

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 52,
  },
}

export const Values: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <div>
        <div className="flex justify-between mb-2 text-sm">
          <span>0%</span>
          <span>0%</span>
        </div>
        <Progress value={0} />
      </div>
      <div>
        <div className="flex justify-between mb-2 text-sm">
          <span>25%</span>
          <span>25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div>
        <div className="flex justify-between mb-2 text-sm">
          <span>50%</span>
          <span>50%</span>
        </div>
        <Progress value={50} />
      </div>
      <div>
        <div className="flex justify-between mb-2 text-sm">
          <span>75%</span>
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div>
        <div className="flex justify-between mb-2 text-sm">
          <span>100%</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState(33)
    return (
      <div className="flex flex-col gap-4 w-[400px]">
        <div className="flex justify-between mb-2 text-sm">
          <span>Progress</span>
          <span>{value}%</span>
        </div>
        <Progress value={value} />
        <div className="flex gap-2">
          <button onClick={() => setValue(Math.max(0, value - 10))} className="px-3 py-1 border rounded">
            -10%
          </button>
          <button onClick={() => setValue(Math.min(100, value + 10))} className="px-3 py-1 border rounded">
            +10%
          </button>
        </div>
      </div>
    )
  },
}

