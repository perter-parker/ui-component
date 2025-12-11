import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'
import { Label } from './label'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
    rows: 4,
  },
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <div>
        <Label>Normal</Label>
        <Textarea placeholder="정상 상태" />
      </div>
      <div>
        <Label>Disabled</Label>
        <Textarea placeholder="비활성화" disabled />
      </div>
      <div>
        <Label>With Value</Label>
        <Textarea defaultValue="입력된 텍스트가 여기에 표시됩니다." />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <div>
        <Label>Small (3 rows)</Label>
        <Textarea rows={3} placeholder="작은 텍스트 영역" />
      </div>
      <div>
        <Label>Default (4 rows)</Label>
        <Textarea rows={4} placeholder="기본 텍스트 영역" />
      </div>
      <div>
        <Label>Large (6 rows)</Label>
        <Textarea rows={6} placeholder="큰 텍스트 영역" />
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[400px]">
      <Label htmlFor="textarea-example">메시지</Label>
      <Textarea id="textarea-example" placeholder="메시지를 입력하세요" rows={5} />
    </div>
  ),
}

