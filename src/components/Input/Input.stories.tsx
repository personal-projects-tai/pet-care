import { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Default: StoryObj = {
  args: {
    mode: 'light',
    placeholder: 'Tell me your name',
    type: 'text'
  }
}

export const Dark: StoryObj = {
  args: {
    mode: 'dark',
    placeholder: 'Tell me your name',
    type: 'text'
  }
}
