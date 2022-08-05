import React, { useEffect, useState } from 'react'
import './Main.css'
import { Card } from '../../components/Card/Card'

export const Main = () => {
  const [characters, setCharacters] = useState([])
  const [pageCounter, setPageCounter] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [searchedFocus, setSearchedFocus] = useState(false)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    callApiPages()
  }, [])

  useEffect(() => {
    callApi()
  }, [pageCounter])

  useEffect(() => {
    apiSearcher()
  }, [searchText])

  const callApi = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageCounter}`,
      )
      const data = await response.json()
      setCharacters(data.results)
    } catch (e) {
      console.log('Error: ', e)
    }
  }

  const callApiPages = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/`)
      const data = await response.json()
      setTotalPages(data.info.pages)
    } catch (e) {
      console.log('Error: ', e)
    }
  }

  const apiSearcher = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${searchText}`,
      )
      if (response.status !== 400) {
        const data = await response.json()
        setCharacters(data.results)
      }
    } catch (e) {
      console.log('Error: ', e)
    }
  }

  const firstPage = () => {
    setPageCounter(1)
  }

  const previousPage = () => {
    if (pageCounter > 1) {
      setPageCounter(pageCounter - 1)
    }
  }

  const nextPage = () => setPageCounter(pageCounter + 1)

  const lastPage = () => {
    setPageCounter(totalPages)
  }

  return (
    <main className="main-container">
      <div className={`search-box ${searchedFocus && 'search-box-focus'}`}>
        <input
          className="search-input"
          type="text"
          placeholder="search"
          onClick={() => setSearchedFocus(true)}
          onBlur={() => setSearchedFocus(false)}
          onChange={e => setSearchText(e.target.value)}
        />
        <button>
          <img
            className="search-icon"
            src="./assets/icons/search-icon.svg"
            alt="search"
          />
        </button>
      </div>

      {characters ? (
        <>
          <div className="main-container-cards">
            {characters.map(item => (
              <Card
                key={item.id}
                name={item.name}
                image={item.image}
                specie={item.species}
                gender={item.gender}
              />
            ))}
          </div>

          <div className="pagination-container">
            <button onClick={firstPage}>&lt;&lt;</button>
            <button onClick={previousPage}> &lt; </button>

            <div className="pageNumber">
              {pageCounter} / {totalPages}
            </div>

            <button onClick={nextPage}>&gt;</button>
            <button onClick={lastPage}>&gt;&gt;</button>
          </div>
        </>
      ) : (
        <p className="not-found">'{searchText}' Is Not found</p>
      )}
    </main>
  )
}
