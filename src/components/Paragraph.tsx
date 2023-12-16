import {PropsWithChildren} from 'react'

const Paragraph = ({children}: PropsWithChildren) => {
  return (
    <p className="mb-2 text-base">{children}</p>
  )
}

export default Paragraph