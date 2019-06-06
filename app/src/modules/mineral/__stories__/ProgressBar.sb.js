import React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'mineral-ui/themes'
import ProgressBar from '../ProgressBar'
import theme from 'theme.mineral'

const styles = {
  padding: 20,
  '& > *': { margin: 10 },
}

const Container = ({ children, css = {} }) => (
  <ThemeProvider theme={theme}>
    <div css={[styles, css]}>
      {children}
    </div>
  </ThemeProvider>
)

storiesOf('Mineral/ProgressBar', module)
  .add('Colors', () => (
    <Container>
      <ProgressBar now={60}>Default</ProgressBar>
      <ProgressBar now={60} variant='primary'>Primary</ProgressBar>
      <ProgressBar now={60} variant='success'>Success</ProgressBar>
      <ProgressBar now={60} variant='warning'>Warning</ProgressBar>
      <ProgressBar now={60} variant='danger'>Danger</ProgressBar>
      <ProgressBar now={60} variant='light'>Light</ProgressBar>
    </Container>
  ))
