import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'mineral-ui/themes'
import theme from 'theme.mineral'
import TextButton from '../TextButton'
import DropdownSelect from '../DropdownSelect'

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

const data = [{
  text: 'Test 1',
  value: 'test-1',
}, {
  text: 'Test 2',
  value: 'test-2',
}]

storiesOf('Mineral/DropdownSelect', module)
  .add('Default', () => (
    <Base>
      <DropdownSelect onChange={action('onChange')} data={data}>
        {(item) => (
          <TextButton>
            {item ? item.value : 'Test'}
          </TextButton>
        )}
      </DropdownSelect>
    </Base>
  ))
