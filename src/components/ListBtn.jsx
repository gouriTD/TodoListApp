import React from 'react'

function ListBtn({label,className,onClick,isDisabled = false}) {
  return (
    <button onClick={onClick} className={`px-2 bg-blue-500 rounded-md active:bg-gray-400 text-white text-sm ${className} ${isDisabled?'bg-gray-400':''}`} disabled={isDisabled}>{label}</button>
  )
}

export default ListBtn
