import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@llemosv-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/llemosv.png',
    alt: 'User Image',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'User Image',
  },
}
