import React from 'react'
import { storiesOf } from '@storybook/react'
// import styled from '@emotion/styled'
import { ThemeProvider } from 'mineral-ui/themes'
import Badge from '../Badge'
import theme from 'theme.mineral'

const styles = {
  padding: 20,
}

const Container = ({ children, css = {} }) => (
  <ThemeProvider theme={theme}>
    <div css={[styles, css]}>
      {children}
    </div>
  </ThemeProvider>
)

storiesOf('Mineral/Badge', module)
  .add('Colors', () => (
    <Container>
      <Badge>Default</Badge>
      <Badge variant='primary'>Primary</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='warning'>Warning</Badge>
      <Badge variant='danger'>Danger</Badge>
      <Badge variant='light'>Light</Badge>
    </Container>
  ))

  .add('Pills', () => (
    <Container>
      <Badge pill>Default</Badge>
      <Badge pill color='primary'>Primary</Badge>
      <Badge pill color='secondary'>Secondary</Badge>
      <Badge pill color='success'>Success</Badge>
      <Badge pill color='info'>Info</Badge>
      <Badge pill color='warning'>Warning</Badge>
      <Badge pill color='danger'>Danger</Badge>
    </Container>
  ))

  .add('Sizes', () => (
    <Container>
      <Badge>Default</Badge>
      <Badge size='small'>Small</Badge>
      <Badge size='medium'>Medium</Badge>
      <Badge size='large'>Large</Badge>
      <Badge size='jumbo'>Jumbo</Badge>
    </Container>
  ))
