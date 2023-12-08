import { Box, Button, Toast, ToastProps } from '@llemosv-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

export const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            padding: '$20',
            background: '$gray600',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<ToastProps> = {}
