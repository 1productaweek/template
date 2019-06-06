import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'

const variantMap = (theme) => ({
  danger: {
    color: theme.color_dangerPrimary,
    background: theme.color_danger,
  },
  success: {
    color: theme.color_successPrimary,
    background: theme.color_success,
  },
  warning: {
    color: theme.color_warningPrimary,
    background: theme.color_warning,
  },
  primary: {
    color: theme.color_themePrimary,
    background: theme.color_theme,
  },
  light: {
    color: theme.color_gray_60,
    background: theme.color_gray_30,
  },
})

const colorProp = props => {
  const { theme, variant = 'primary' } = props
  const { background, color } = variantMap(theme)[variant]
  return `
    background-color: ${background};
    color: ${color};
  `
}

const pillProp = props => props.pill && `
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
`

const rootSizeProp = props => ({
  jumbo: `
    height: ${props.theme.size_jumbo};
  `,
  large: `
    height: ${props.theme.size_large};
  `,
  medium: `
    height: ${props.theme.size_medium};
  `,
  small: `
    height: ${props.theme.size_small};
  `,
}[props.size || 'large'])

const contentSizeProp = props => ({
  jumbo: `
    line-height: ${props.theme.size_jumbo};
  `,
  large: `
    line-height: ${props.theme.size_large};
  `,
  medium: `
    line-height: ${props.theme.size_medium};
  `,
  small: `
    font-size: 0.75em;
    line-height: 2em;
  `,
}[props.size || 'large'])

export const Inner = styled('span')({
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  maxHeight: '100%',
  pointerEvents: 'none',
  width: '100%',
})

// box-sizing: border-box;
//     color: #ffffff;
//     font-size: 14px;
//     line-height: 1.25;
//     outline: 0;
//     background-color: #3272d9;
//     border-color: transparent;
//     border-radius: 0.1875em;
//     border-style: solid;
//     border-width: 1px;
//     cursor: pointer;
//     display: inline-block;
//     font-weight: 600;
//     height: 1.5em;
//     margin: 0;
//     min-width: 1.5em;
//     padding: 0 0.5em;
//     -webkit-text-decoration: none;
//     text-decoration: none;
//     vertical-align: middle;

const Root = styled('span')`
  font-family: ${props => `${props.theme.fontFamily}, ${props.theme.fontFamily_system}`};
  font-size: ${props => props.theme.fontSize_base};
  font-weight: ${props => props.theme.fontWeight_semiBold};
  display: inline-block;
  cursor: default;
  border-color: transparent;
  border-width: 1px;
  border-radius: ${props => props.theme.borderRadius_1};
  line-height: 1.25;
  min-width: 1.5em;
  padding: 0 ${props => props.theme.space_inset_sm};
  color: #fff;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  :empty {
    display: none;
  }
  ${colorProp}
  ${rootSizeProp}
  ${pillProp}
`

const Content = styled('span')`
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  line-height: 2.2857142857142856em;
  ${contentSizeProp}
`

function Badge ({ theme, children, ...props }) {
  return (
    <Root theme={theme} {...props}>
      <Inner><Content theme={theme} size={props.size}>{children}</Content></Inner>
    </Root>
  )
}

export default withTheme(Badge)
