import React from 'react'
import { css } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'mineral-ui/themes'
import Select from 'mineral-ui/Select'
import Box from 'mineral-ui/Box'
import ReactSelect from '../ReactSelect'
import theme from 'theme.mineral'

const styles = css`
  padding: 1em;
`

const Base = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div css={styles}>
      {children}
    </div>
  </ThemeProvider>
)

const data = [
  {
    label: 'Menu item',
    value: 'basic',
  },
  {
    label: 'Icon at start',
    value: 'iconStart',
  },
]

storiesOf('Mineral/Informed', module)
  .add('Default', () => (
    <Base>
      <Box inline padding='sm' width='10em'>
        <ReactSelect menuIsOpen options={data} field='name' />
      </Box>
      <Box inline padding='sm' width='10em'>
        <Select data={data.map(({ label, value }) => ({ text: label, value }))} />
      </Box>
    </Base>
  ))
