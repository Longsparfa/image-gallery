import React from 'react'

const Card = ({ children }) => {
    return (
      <div className={` border-[1px] border-solid border-transparent rounded-[5px] shadow-lg overflow-hidden `}>{children}</div>
    )
  }

export default Card;