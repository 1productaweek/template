import React from 'react'
import { ThemeProvider } from 'mineral-ui/themes'
import Button from 'mineral-ui/Button'

function App () {
  return (
    <ThemeProvider>
      <Button>
        Hello World 2
      </Button>
    </ThemeProvider>
  )
}

export default App
