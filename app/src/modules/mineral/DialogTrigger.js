import React, { useState, useCallback } from 'react'

function DialogTrigger ({
  dialog: Dialog, children, onChange, ...props
}) {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const isFunction = typeof children === 'function'
  const childProps = {
    onClick: () => setIsOpen(true),
    isOpen: isFunction && isOpen,
  }
  const child = isFunction ? children(childProps) : React.cloneElement(children, childProps)

  let dialogEl = (
    <Dialog
      {...props}
      isOpen={isOpen}
      onClose={onClose}
      onCancel={onClose}
      onDone={onClose}
    />
  )

  return (
    <React.Fragment>
      {dialogEl}
      {child}
    </React.Fragment>
  )
}

export default DialogTrigger
