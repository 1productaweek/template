import React, { useState } from 'react'
import { css } from '@emotion/core'
import Menu, { MenuItem } from 'mineral-ui/Menu'
import Popover from 'mineral-ui/Popover'

function DropdownSelect ({
  children, onChange, value, defaultValue, data = [], itemKey = 'value',
  menuProps = {}, ...props
}) {
  const [autoValue, setAutoValue] = useState(defaultValue)
  const [isOpen, setIsOpen] = useState(false)
  const inputValue = value === undefined ? autoValue : value

  const menuEl = data.map((item) => {
    const { text } = item
    return (
      <MenuItem key={item[itemKey]} isHighlighted={item[itemKey] === inputValue} onClick={(e) => {
        setAutoValue(item)
        if (onChange) onChange(item, e)
        setIsOpen(false)
      }}>
        {text}
      </MenuItem>
    )
  })

  const menu = (
    <div css={styles.content}>
      <Menu {...menuProps}>{menuEl}</Menu>
    </div>
  )

  const isFunction = typeof children === 'function'

  return (
    <Popover
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      content={menu}>
      {isFunction ? children(inputValue) : children }
    </Popover>
  )
}

const styles = {
  content: css`
    margin: -1em;
    max-height: 20em;
    overflow: auto;
  `,
}

export default DropdownSelect
