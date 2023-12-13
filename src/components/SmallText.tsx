import React, { FC } from 'react'

const SmallText: FC<{content: string}> = ({content}) => {
  return (
    <p className="text-xs text-gray-500">{content}</p>
  )
}

export default SmallText