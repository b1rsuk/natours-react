import React from 'react'
import style from './header.module.scss'
import NavBar from './NavBar/NavBar'
import Title from './Title/Title'

function Header() {
  return (
    <header className={style.header}>
      <NavBar />
      <Title />
    </header>
  )
}

export default React.memo(Header)