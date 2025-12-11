import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'
import { Input } from './Input'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Label',
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="email">이메일</Label>
      <Input id="email" type="email" placeholder="email@example.com" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">이용약관에 동의합니다</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="privacy" />
        <Label htmlFor="privacy">개인정보 처리방침에 동의합니다</Label>
      </div>
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="required-input">
        필수 입력 <span className="text-destructive">*</span>
      </Label>
      <Input id="required-input" placeholder="필수 입력 필드" />
    </div>
  ),
}

