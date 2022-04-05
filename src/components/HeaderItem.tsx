import React, { FC } from 'react'

interface HeaderItemProps {
    textValue: string,
    id: string 
    className: string
}

const HeaderItem : FC<HeaderItemProps> = ({textValue, id, className}) => {

  return (
    <div className={className} id={id}>
        {textValue}
    </div>
  )
}

export default HeaderItem