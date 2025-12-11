import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Label } from './Label'

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '입력하세요',
    type: 'text',
  },
}

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <div>
        <Label>Text</Label>
        <Input type="text" placeholder="텍스트 입력" />
      </div>
      <div>
        <Label>Email</Label>
        <Input type="email" placeholder="email@example.com" />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" placeholder="비밀번호" />
      </div>
      <div>
        <Label>Number</Label>
        <Input type="number" placeholder="숫자 입력" />
      </div>
      <div>
        <Label>Search</Label>
        <Input type="search" placeholder="검색..." />
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <div>
        <Label>Normal</Label>
        <Input placeholder="정상 상태" />
      </div>
      <div>
        <Label>Disabled</Label>
        <Input placeholder="비활성화" disabled />
      </div>
      <div>
        <Label>With Value</Label>
        <Input defaultValue="입력된 값" />
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="input-example">이름</Label>
      <Input id="input-example" placeholder="이름을 입력하세요" />
    </div>
  ),
}

