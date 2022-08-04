import React, { useState } from 'react'
import './Header.css'

export const Header = () => {
  const [searchedFocus, setSearchedFocus] = useState(false)

  console.log('searchedFocus', searchedFocus)

  return (
    <>
      <header className="header-box">
        <img
          className="header-img"
          src="./assets/images/logo.svg"
          alt="logo rickg and morty"
        />

        <div className={`search-box ${searchedFocus && 'search-box-focus'}`}>
          <input
            type="text"
            placeholder="search"
            onClick={() => setSearchedFocus(true)}
            onBlur={() => setSearchedFocus(false)}
          />
          <button>
            <img
              className="search-icon"
              src="./assets/icons/search-icon.svg"
              alt="search"
            />
          </button>
        </div>
      </header>
    </>
  )
}
