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
    size: 'md',
    mode: 'light'
  }
}

export const Dark: StoryObj = {
  args: {
    title: 'Click',
    type: 'primary',
    size: 'md',
    mode: 'dark'
  }
}

export const Secondary: StoryObj = {
  args: {
    title: 'Click',
    type: 'secondary',
    size: 'md',
    mode: 'light'
  }
}

export const SecondaryDark: StoryObj = {
  args: {
    title: 'Click',
    type: 'secondary',
    size: 'md',
    mode: 'dark'
  }
}

export const Outlined: StoryObj = {
  args: {
    title: 'Click',
    type: 'outlined',
    size: 'md',
    mode: 'light'
  }
}

export const OutlinedDark: StoryObj = {
  args: {
    title: 'Click',
    type: 'outlined',
    size: 'md',
    mode: 'dark'
  }
}

export const Planed: StoryObj = {
  args: {
    title: 'Click',
    type: 'planed',
    size: 'md',
    mode: 'light'
  }
}

export const PlanedDark: StoryObj = {
  args: {
    title: 'Click',
    type: 'planed',
    size: 'md',
    mode: 'dark'
  }
}

export const Destructive: StoryObj = {
  args: {
    title: 'Click',
    type: 'destructive',
    size: 'md',
    mode: 'light'
  }
}

export const DestructiveDark: StoryObj = {
  args: {
    title: 'Click',
    type: 'destructive',
    size: 'md',
    mode: 'dark'
  }
}

export const Ghost: StoryObj = {
  args: {
    title: 'Click',
    type: 'ghost',
    size: 'md',
    mode: 'light'
  }
}

export const GhostDark: StoryObj = {
  args: {
    title: 'Click',
    type: 'ghost',
    size: 'md',
    mode: 'dark'
  }
}

export const PlanedGhost: StoryObj = {
  args: {
    title: 'Click',
    type: 'planed-ghost',
    size: 'md',
    mode: 'light'
  }
}

export const PlanedGhostDark: StoryObj = {
  args: {
    title: 'Click',
    type: 'planed-ghost',
    size: 'md',
    mode: 'dark'
  }
}

export const Dashed: StoryObj = {
  args: {
    title: 'Click',
    type: 'dashed',
    size: 'md',
    mode: 'light'
  }
}

export const DashedDark: StoryObj = {
  args: {
    title: 'Click',
    type: 'dashed',
    size: 'md',
    mode: 'dark'
  }
}
