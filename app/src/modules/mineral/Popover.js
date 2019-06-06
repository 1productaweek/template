import styled from '@emotion/styled'
import Popover from 'mineral-ui/Popover'
import { withTheme } from 'emotion-theming'

// const noPadding = ({ theme, noPadding }) => {
//   return noPadding ? `
//     padding: 0;
//     margin: 0;
//   ` : ''
// }

export default withTheme(styled(Popover)`
  padding: 0;
`)
