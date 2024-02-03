import { Meta, StoryObj } from '@storybook/react'
import { Subtitle } from '.'

export default {
  title: 'Subtitle',
  component: Subtitle
} as Meta

export const Default: StoryObj = {
  args: {
    subtitle: 'Subtitle',
    mode: 'dark',
    size: '1',
    type: 'regular'
  }
}

export const SubtitleOneSemibold: StoryObj = {
  args: {
    subtitle: 'Subtitle',
    mode: 'dark',
    size: '1',
    type: 'semibold'
  }
}

export const SubtitleOneUnderlined: StoryObj = {
  args: {
    subtitle: 'Subtitle',
    mode: 'dark',
    size: '1',
    type: 'underlined'
  }
}

export const SubtitleTwoRegular: StoryObj = {
  args: {
    subtitle: 'Subtitle',
    mode: 'dark',
    size: '2',
    type: 'regular'
  }
}

export const SubtitleTwoSemibold: StoryObj = {
  args: {
    subtitle: 'Subtitle',
    mode: 'dark',
    size: '2',
    type: 'semibold'
  }
}

export const SubtitleTwoUnderlined: StoryObj = {
  args: {
    subtitle: 'Subtitle',
    mode: 'dark',
    size: '2',
    type: 'underlined'
  }
}

export const SubtitleThreeRegular: StoryObj = {
  args: {
    subtitle: 'Subtitle',
    mode: 'dark',
    size: '3',
    type: 'regular'
  }
}

export const SubtitleThreeSemibold: StoryObj = {
  args: {
    subtitle: 'Subtitle',
    mode: 'dark',
    size: '3',
    type: 'semibold'
  }
}

export const SubtitleThreeUnderlined: StoryObj = {
  args: {
    subtitle: 'Subtitle',
    mode: 'dark',
    size: '3',
    type: 'underlined'
  }
}
