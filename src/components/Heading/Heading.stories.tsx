import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading
} as Meta

export const Default: StoryObj = {
  args: {
    heading: 'Heading 1',
    mode: 'dark',
    type: '1'
  }
}

export const HeadingTwo: StoryObj = {
  args: {
    heading: 'Heading 2',
    mode: 'dark',
    type: '2'
  }
}

export const HeadingThree: StoryObj = {
  args: {
    heading: 'Heading 3',
    mode: 'dark',
    type: '3'
  }
}

export const HeadingFour: StoryObj = {
  args: {
    heading: 'Heading 4',
    mode: 'dark',
    type: '4'
  }
}
