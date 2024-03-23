import { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: StoryObj = {
  args: {
    title: 'Click',
    type: 'primary',
    size: 'md'
  }
}

export const Secondary: StoryObj = {
  args: {
    title: 'Click',
    type: 'secondary',
    size: 'md'
  }
}

export const Outlined: StoryObj = {
  args: {
    title: 'Click',
    type: 'outlined',
    size: 'md'
  }
}

export const Planed: StoryObj = {
  args: {
    title: 'Click',
    type: 'planed',
    size: 'md'
  }
}

export const Destructive: StoryObj = {
  args: {
    title: 'Click',
    type: 'destructive',
    size: 'md'
  }
}

export const Ghost: StoryObj = {
  args: {
    title: 'Click',
    type: 'ghost',
    size: 'md'
  }
}

export const PlanedGhost: StoryObj = {
  args: {
    title: 'Click',
    type: 'planed-ghost',
    size: 'md'
  }
}

export const Dashed: StoryObj = {
  args: {
    title: 'Click',
    type: 'dashed',
    size: 'md'
  }
}
