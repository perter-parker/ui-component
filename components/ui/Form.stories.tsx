import type { Meta, StoryObj } from '@storybook/react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'

const meta = {
  title: 'UI/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        email: '',
        password: '',
      },
    })

    return (
      <Form {...form}>
        <form className="w-[400px] space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  이메일 주소를 입력하세요.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription>
                  비밀번호를 입력하세요.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">제출</Button>
        </form>
      </Form>
    )
  },
}

export const WithValidation: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        email: '',
      },
    })

    return (
      <Form {...form}>
        <form
          className="w-[400px] space-y-4"
          onSubmit={form.handleSubmit((data) => console.log(data))}
        >
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: '이메일은 필수입니다.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '올바른 이메일 형식이 아닙니다.',
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  이메일 주소를 입력하세요.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">제출</Button>
        </form>
      </Form>
    )
  },
}

