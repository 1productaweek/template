import React from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'

function Loader ({ loading, children }) {
  if (loading) {
    return <Spinner />
  }
  return children
}

Loader.propTypes = {
  children: PropTypes.element,
  loading: PropTypes.bool,
}

export default Loader
