import { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: StoryObj = {
  args: {
    title: 'Click',
    variant: 'primary',
    size: 'md'
  }
}

export const Secondary: StoryObj = {
  args: {
    title: 'Click',
    variant: 'secondary',
    size: 'md'
  }
}

export const Outlined: StoryObj = {
  args: {
    title: 'Click',
    variant: 'outlined',
    size: 'md'
  }
}

export const Planed: StoryObj = {
  args: {
    title: 'Click',
    variant: 'planed',
    size: 'md'
  }
}

export const Destructive: StoryObj = {
  args: {
    title: 'Click',
    variant: 'destructive',
    size: 'md'
  }
}

export const Ghost: StoryObj = {
  args: {
    title: 'Click',
    variant: 'ghost',
    size: 'md'
  }
}

export const PlanedGhost: StoryObj = {
  args: {
    title: 'Click',
    variant: 'planed-ghost',
    size: 'md'
  }
}

export const Dashed: StoryObj = {
  args: {
    title: 'Click',
    variant: 'dashed',
    size: 'md'
  }
}
