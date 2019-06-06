import React from 'react'
import Select from 'react-select'
import { themed } from 'mineral-ui/themes'
import { withTheme } from 'emotion-theming'

const mineralStyles = {
  container: (style, { theme }) => ({
    ...style,
    fontSize: theme.fontSize_ui,
  }),
  indicatorSeparator: () => ({
    width: 0,
  }),
  placeholder: (style, { theme }) => ({
    ...style,
    color: theme && theme.input_color_placeholder,
  }),
  control: (style, { theme }) => ({
    ...style,
    minHeight: 35,
    borderColor: '#c8d1e0',
    ':hover': {
      borderColor: theme && theme.borderColor_theme_hover,
      boxShadow: 'none',
    },
    ':active': {
      boxShadow: '0 0 0 1px #ffffff, 0 0 0 2px #1d5bbf',
      borderColor: '#c8d1e0',
    },
  }),
  option: (style, { theme, isSelected }) => {
    if (isSelected) return style
    return ({
      ...style,
      // color: theme.color,
      ':hover': {
        background: theme && theme.color_gray_10,
      },
    })
  },
  menuPortal: (style, { theme }) => ({
    ...style,
    fontSize: theme && theme.fontSize_ui,
  }),
  menu: (style, { theme, ...props }) => {
    return ({
      ...style,
      marginTop: 4,
      zIndex: theme && theme.zIndex_100,
      boxShadow: theme && theme.boxShadow_2,
      border: '1px solid #eee',
      borderColor: theme && theme.panel_borderColor,
    })
  },
}

const StyledSelect = ({ styles, ...props }) => {
  return <Select styles={{ ...mineralStyles, ...(styles || {}) }} {...props} />
}

const ThemedReactSelect = themed(withTheme(StyledSelect))(({ theme }) => ({
  borderRadius: theme.borderRadius_1,
  danger: theme.backgroundColor_dangerPrimary,
  dangerLight: theme.backgroundColor_danger_focus,
  neutral0: theme.color_white,
  neutral5: theme.color_gray_10,
  neutral10: theme.color_gray_10,
  neutral20: theme.color_gray_20,
  neutral30: theme.color_gray_30,
  neutral40: theme.color_gray_40,
  neutral50: theme.color_gray_50,
  neutral60: theme.color_gray_60,
  neutral70: theme.color_gray_70,
  neutral80: theme.color_gray_80,
  neutral90: theme.color_gray_90,
  primary: theme.color_theme,
  primary25: theme.color_gray_10,
  primary50: theme.color_theme_20,
  primary75: theme.color_theme_70,
}))

export default ThemedReactSelect
