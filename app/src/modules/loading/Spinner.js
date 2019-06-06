import React from 'react'
// import { Loader } from 'react-loaders'
import logo from 'img/logo-square-80.png'
import './spinner.css'

function Spinner () {
  return (
    <div css={loaderStyle} >
      <div className='spinner'>
        <img width={40} src={logo} alt='logo' />
      </div>
    </div>
  )
}

// <Loader className={`sk-fade-in ${css(loaderStyle)}`} type='ball-pulse' />

const loaderStyle = {
  position: 'absolute',
  height: 18,
  width: 36,
  margin: '-36px 0 0 -16px',
  top: '50%',
  left: '50%',
  ' > div > div': {
    backgroundColor: 'rgba(130, 130, 130, 0.5)',
    width: 8,
    height: 8,
  },
}

export default Spinner
