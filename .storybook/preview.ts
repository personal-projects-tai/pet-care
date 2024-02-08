import type { Preview } from '@storybook/react'

import '../src/assets/styles/variables/fonts.scss'
import '../src/assets/styles/variables/colors.scss'
import '../src/assets/styles/variables/spaces.scss'
import '../src/assets/styles/variables/shadows.scss'
import '../src/assets/styles/variables/breakpoints.scss'
import '../src/assets/styles/global/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
