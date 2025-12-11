import type { Meta, StoryObj } from '@storybook/react'
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from './native-select'
import { Label } from './label'

const meta = {
  title: 'UI/NativeSelect',
  component: NativeSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Select an option</NativeSelectOption>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="select-example">Choose a fruit</Label>
      <NativeSelect id="select-example">
        <NativeSelectOption value="">Select a fruit</NativeSelectOption>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="orange">Orange</NativeSelectOption>
        <NativeSelectOption value="grape">Grape</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}

export const WithOptGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="select-group">Choose a category</Label>
      <NativeSelect id="select-group">
        <NativeSelectOption value="">Select a category</NativeSelectOption>
        <NativeSelectOptGroup label="Fruits">
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
          <NativeSelectOption value="orange">Orange</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Vegetables">
          <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
          <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
          <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <div>
        <Label>Normal</Label>
        <NativeSelect>
          <NativeSelectOption value="option1">Option 1</NativeSelectOption>
          <NativeSelectOption value="option2">Option 2</NativeSelectOption>
        </NativeSelect>
      </div>
      <div>
        <Label>Disabled</Label>
        <NativeSelect disabled>
          <NativeSelectOption value="option1">Option 1</NativeSelectOption>
          <NativeSelectOption value="option2">Option 2</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="select-default">Country</Label>
      <NativeSelect id="select-default" defaultValue="kr">
        <NativeSelectOption value="us">United States</NativeSelectOption>
        <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
        <NativeSelectOption value="kr">South Korea</NativeSelectOption>
        <NativeSelectOption value="jp">Japan</NativeSelectOption>
        <NativeSelectOption value="cn">China</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}

