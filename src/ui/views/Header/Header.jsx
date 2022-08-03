import React, { useState } from 'react'
import './Header.css'

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)

  const menuItems = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]

  const menuMobile = () => {
    return (
      <div className="hamburguer-menu">
        <ul className="header-list">
          {menuItems.map(item => (
            <li className="header-list-item">{item.name}</li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <>
      <header className="header-box">
        <img
          className="header-img"
          src="./assets/images/logo.png"
          alt="logo rickg and morty"
        />

        <div className="search-box">
          <img
            className="search-icon"
            src="./assets/icons/search-icon.svg"
            alt="search"
          />
          <input type="text" placeholder="search" />

          <img
            className="menu-icon"
            src="./assets/images/menu.svg"
            alt="menu"
            onClick={() => setIsShowMenu(prevIsShow => !prevIsShow)}
          />
        </div>
      </header>

      {isShowMenu ? menuMobile() : ''}
    </>
  )
}
