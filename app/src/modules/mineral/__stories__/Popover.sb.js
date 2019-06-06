import React from 'react'
import { css } from '@emotion/core'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'mineral-ui/themes'
import theme from 'theme.mineral'
import Popover from '../Popover'

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

const content = <div css={css`width: 40px; height: 40px; margin-left: -0.5em; background: #333;`} />

storiesOf('Mineral/Popover', module)
  .add('Default', () => (
    <Base>
      <Popover content={content}>
        <div>Test</div>
      </Popover>
    </Base>
  ))
  .add('No Padding', () => (
    <Base>
      <Popover noPadding content={content}>
        <div>Test</div>
      </Popover>
    </Base>
  ))
