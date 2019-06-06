import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'

const textProp = ({ theme, size, fade }) => {
  const sizes = {
    jumbo: theme.h3_fontSize,
    large: theme.fontSize_prose,
    medium: theme.fontSize_ui,
    small: theme.fontSize_mouse,
  }
  const fontSize = sizes[size] || theme.fontSize_prose
  const color = fade
    ? theme.color_gray_60
    : theme.backgroundColor_themePrimary
  return `
    color: ${color};
    font-size: ${fontSize};
    font-weight: 600;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    line-height: 1.25;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    display: inline-block;
    margin: 0;
    text-decoration: none;
    vertical-align: middle;
    &:hover {
      color: ${theme.borderColor_theme_hover}
    }
    &:focus {
      box-shadow: none;
      color: ${theme.borderColor_theme_focus}
    }
    &:active {
      background: transparent;
      color: ${theme.borderColor_theme_active}
    }
  `
}

export default withTheme(styled.button(textProp))
