import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'mineral-ui/themes'
import Button from 'mineral-ui/Button'
import Dropdown from 'mineral-ui/Dropdown'
import Caret from 'modules/base/Caret'
import Icon from 'modules/base/Icon'
import theme from 'theme.mineral'

const styles = {
  padding: 20,
}

const Base = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div css={styles}>
      {children}
    </div>
  </ThemeProvider>
)

const data = [{
  text: 'Menu item with onClick',
  onClick: action('menu-click-1'),
}, {
  text: 'Menu item',
  secondaryText: 'Secondary text',
  onClick: action('menu-click-2'),
}]

storiesOf('Mineral/Buttons', module)
  .add('Default', () => (
    <Base>
      <Button primary size='jumbo'>
        Jumbo <Caret size='jumbo' />
      </Button>
      <Button primary>Large <Caret /></Button>
      <Button primary size='medium'>
        Medium <Caret size='medium' />
      </Button>
      <Button primary size='small'>
        Small <Caret size='small' />
      </Button>
    </Base>
  ))
  .add('Icon', () => (
    <Base>
      <Button iconStart={<Icon icon='edit' />} aria-label='Credit Card' />
    </Base>
  ))

const CustomTrigger = ({ children, ...props }) => {
  return <a {...props}>{children}</a>
}

storiesOf('Mineral/Dropdown', module)
  .add('Default', () => (
    <Base>
      <Dropdown data={data}>
        <Button primary>
          Test <Caret />
        </Button>
      </Dropdown>
    </Base>
  ))

  .add('Custom', () => (
    <Base>
      <Dropdown data={data}>
        <CustomTrigger>Test</CustomTrigger>
      </Dropdown>
    </Base>
  ))

  .add('Minimal', () => (
    <Base>
      <Dropdown data={data}>
        <Button minimal size='medium'>Test</Button>
      </Dropdown>
    </Base>
  ))
