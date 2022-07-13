import React from 'react'

export const Footer = () => {
  let style={
    width:"100%"
  }
  return (
    <footer className='bg-dark text-light text-center py-2' style={style}>
        <p className="text-center">Copyright &#169; MyTodoList.com</p>
    </footer>
  )
}
