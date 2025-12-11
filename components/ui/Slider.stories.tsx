import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'
import * as React from 'react'

const meta = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'object',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
  },
}

export const Ranges: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[400px]">
      <div>
        <div className="mb-2 text-sm">0-100</div>
        <Slider defaultValue={[50]} min={0} max={100} />
      </div>
      <div>
        <div className="mb-2 text-sm">0-1000</div>
        <Slider defaultValue={[500]} min={0} max={1000} />
      </div>
      <div>
        <div className="mb-2 text-sm">Range: 0-100</div>
        <Slider defaultValue={[20, 80]} min={0} max={100} />
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState([50])
    return (
      <div className="flex flex-col gap-4 w-[400px]">
        <div className="text-sm">Value: {value[0]}</div>
        <Slider value={value} onValueChange={setValue} min={0} max={100} />
      </div>
    )
  },
}

