import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'mineral-ui/themes'
import theme from 'theme.mineral'
import TextButton from '../TextButton'

const styles = {
  padding: 20,
}

const Base = ({ children, css = {} }) => (
  <ThemeProvider theme={theme}>
    <div css={[styles, css]}>
      {children}
    </div>
  </ThemeProvider>
)

storiesOf('Mineral/TextButton', module)
  .add('Sizes', () => (
    <Base>
      <TextButton size='jumbo'>
        Test
      </TextButton>
      <TextButton size='large'>
        Test
      </TextButton>
      <TextButton size='medium'>
        Test
      </TextButton>
      <TextButton size='small'>
        Test
      </TextButton>
    </Base>
  ))
  .add('Minimal', () => (
    <Base css={{ background: '#fafafa' }}>
      <TextButton minimal>
        Test
      </TextButton>
    </Base>
  ))
