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

const Root = styled('div')`
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: .75rem;
  background-color: #e9ecef;
  border-radius: .25rem;
`

const Bar = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  transition: width .6s ease;
  ${colorProp}
`

function Progress ({ theme, now, variant, label, ...props }) {
  return (
    <Root theme={theme} {...props}>
      <Bar
        aria-valuenow={now}
        style={{ width: `${now}%` }}
        aria-valuemin='0'
        aria-valuemax='100'
        theme={theme}
        variant={variant}
      >
        { label }
      </Bar>
    </Root>
  )
}

export default withTheme(Progress)
