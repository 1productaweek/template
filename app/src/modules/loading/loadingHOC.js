import { branch, renderComponent } from 'recompose'
import Spinner from './Spinner'

const LoadingHOC = isLoading => (
  branch(
    isLoading, // isLoading is a fn: (props: Object) => boolean
    renderComponent(Spinner) // `Spinner` is a React component
  )
)

export default LoadingHOC
