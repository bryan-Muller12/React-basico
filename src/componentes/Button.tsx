import React from 'react'

interface IProps {
    children: React.ReactNode;
    disabled?: boolean;
}

const Button = ( {children, disabled}: IProps) => {
    const handleClick=()=>{
        console.log('Oi')
    }
  return (
    <button disabled={disabled} onClick={handleClick} className='p-2 bg-red-300 rounded shadow'>{children}</button>
  )
}

export default Button