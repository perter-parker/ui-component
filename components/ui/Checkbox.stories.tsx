import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { Label } from './Label'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="unchecked" />
        <Label htmlFor="unchecked">Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled" className="opacity-50">Disabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" defaultChecked disabled />
        <Label htmlFor="disabled-checked" className="opacity-50">Disabled Checked</Label>
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">이용약관에 동의합니다</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="privacy" defaultChecked />
        <Label htmlFor="privacy">개인정보 처리방침에 동의합니다</Label>
      </div>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="option1" />
        <Label htmlFor="option1">옵션 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="option2" defaultChecked />
        <Label htmlFor="option2">옵션 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="option3" />
        <Label htmlFor="option3">옵션 3</Label>
      </div>
    </div>
  ),
}

