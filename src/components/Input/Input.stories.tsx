import { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Default: StoryObj = {
  args: {
    placeholder: 'Tell me your name',
    type: 'text'
  }
}
