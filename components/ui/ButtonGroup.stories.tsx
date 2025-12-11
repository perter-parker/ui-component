import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './ButtonGroup'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button>One</Button>
      <ButtonGroupSeparator />
      <Button>Two</Button>
      <ButtonGroupSeparator />
      <Button>Three</Button>
    </ButtonGroup>
  ),
}

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Label</ButtonGroupText>
      <ButtonGroupSeparator />
      <Button>Action</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
}

