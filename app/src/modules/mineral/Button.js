import styled from '@emotion/styled'
import Button from 'mineral-ui/Button'
import { withTheme } from 'emotion-theming'

const textProp = ({ theme, minimal, fade }) => {
  return fade && minimal ? `
    color: ${theme.color_gray_60};
  ` : ''
}

export default withTheme(styled(Button)(textProp))
