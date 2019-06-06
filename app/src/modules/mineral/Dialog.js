import styled from '@emotion/styled'
import Dialog from 'mineral-ui/Dialog'

export { DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActions } from 'mineral-ui/Dialog'

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`

export default styled(Dialog)`
  & > div > div > div:first-child {
    margin-top: 0;
  }
  & > div > div > div:last-child {
    margin-bottom: 0;
  }
`
