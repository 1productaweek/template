import React from 'react'
import ClickOutside from './ClickOutside'

function Sidebar ({ children, sidebar, open, onSetOpen, pullRight, autoOpen, breakpoint = 800, sidebarCss }) {
  const sidebarCssArr = [styles.sidebar(pullRight)]
  const containerCssArr = [styles.container]
  if (autoOpen) {
    sidebarCssArr.push(styles.sidebarAutoOpen(breakpoint, pullRight))
    containerCssArr.push(styles.containerAutoOpen(breakpoint, pullRight))
  }
  if (open) sidebarCssArr.push(styles.sidebarIsOpen)
  if (sidebarCss) sidebarCssArr.push(sidebarCss)
  return (
    <div css={containerCssArr}>
      <ClickOutside
        onClickOutside={() => {
          if (open) {
            onSetOpen(false)
          }
        }}
      >
        <div css={sidebarCssArr}>
          {sidebar}
        </div>
        <div css={styles.content}>{children}</div>
      </ClickOutside>
    </div>
  )
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    transition: 'all 0.2s ease-out',
    padding: 0,
  },
  containerAutoOpen: (breakpoint, pullRight) => ({
    [`@media screen and (min-width: ${breakpoint}px)`]: {
      paddingLeft: pullRight ? 0 : 300,
      paddingRight: pullRight ? 300 : 0,
    },
  }),
  sidebar: (pullRight) => ({
    zIndex: 1,
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    left: pullRight ? undefined : 0,
    right: pullRight ? 0 : undefined,
    height: '100%',
    width: 300,
    maxWidth: 'calc(100% - 45px)',
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    overflowScrolling: 'touch',
    transition: 'all 0.2s ease-out',
    transform: `translateX(${pullRight ? '' : '-'}100%)`,
  }),
  sidebarAutoOpen: (breakpoint, pullRight) => ({
    [`@media screen and (max-width: ${breakpoint}px)`]: {
      transform: `translateX(${pullRight ? '' : '-'}100%)`,
      // boxShadow: `0 0 36px rgba(0, 0, 0, 0.1)`,
    },
    boxShadow: 'none',
    transform: 'translateX(0%)',
  }),
  sidebarIsOpen: {
    transform: 'translateX(0%) !important',
    boxShadow: `0 0 36px rgba(0, 0, 0, 0.1)`,
  },
  content: {
    position: 'relative',
    zIndex: 0,
  },
}

export default Sidebar
