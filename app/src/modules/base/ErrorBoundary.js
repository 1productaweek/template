/* eslint-disable handle-callback-err */
import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (err) {
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    // You can also log the error to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // eslint-disable-next-line
      Raven.captureException(error, info)
    } else {
      console.error(error, info)
    }
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.content || <p>Sorry, we're unable to show this right now</p>
    }

    return this.props.children
  }
}
