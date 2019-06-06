import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled'
import Spinner from '../Spinner'

const Container = styled.div`
  poistion: relative;
  margin: 20px;
  padding: 20px;
  width: 300px;
  height: 300px;
  border: 1px solid #eee;
`

storiesOf('Loading', module)
  .add('Spinner', () => (
    <Container >
      <Spinner />
    </Container>
  ))
