import type { Meta, StoryObj } from '@storybook/react'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
  FieldLegend,
  FieldTitle,
} from './field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const meta = {
  title: 'UI/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FieldGroup className="w-[400px]">
      <Field>
        <FieldLabel htmlFor="email">이메일</FieldLabel>
        <FieldContent>
          <Input id="email" type="email" placeholder="email@example.com" />
          <FieldDescription>이메일 주소를 입력하세요.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <FieldGroup className="w-[500px]">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="name-h">이름</FieldLabel>
        <FieldContent>
          <Input id="name-h" placeholder="이름을 입력하세요" />
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
}

export const WithError: Story = {
  render: () => (
    <FieldGroup className="w-[400px]">
      <Field data-invalid="true">
        <FieldLabel htmlFor="email-error">이메일</FieldLabel>
        <FieldContent>
          <Input id="email-error" type="email" aria-invalid="true" />
          <FieldError>올바른 이메일 형식이 아닙니다.</FieldError>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
}

export const FieldSet2: Story = {
  render: () => (
    <FieldSet className="w-[400px] space-y-4">
      <FieldLegend>개인정보</FieldLegend>
      <Field>
        <FieldLabel htmlFor="name-set">이름</FieldLabel>
        <FieldContent>
          <Input id="name-set" placeholder="이름" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="phone-set">전화번호</FieldLabel>
        <FieldContent>
          <Input id="phone-set" type="tel" placeholder="010-0000-0000" />
        </FieldContent>
      </Field>
    </FieldSet>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <FieldGroup className="w-[400px]">
      <Field>
        <FieldLabel>
          <Checkbox id="terms" />
          이용약관에 동의합니다
        </FieldLabel>
        <FieldDescription>
          서비스 이용을 위해 약관에 동의해주세요.
        </FieldDescription>
      </Field>
    </FieldGroup>
  ),
}

export const WithRadio: Story = {
  render: () => (
    <FieldGroup className="w-[400px]">
      <Field>
        <FieldTitle>성별</FieldTitle>
        <FieldContent>
          <RadioGroup defaultValue="male">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <label htmlFor="male">남성</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <label htmlFor="female">여성</label>
            </div>
          </RadioGroup>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <FieldGroup className="w-[400px]">
      <Field>
        <FieldLabel htmlFor="field1">필드 1</FieldLabel>
        <FieldContent>
          <Input id="field1" />
        </FieldContent>
      </Field>
      <FieldSeparator>또는</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="field2">필드 2</FieldLabel>
        <FieldContent>
          <Input id="field2" />
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
}

