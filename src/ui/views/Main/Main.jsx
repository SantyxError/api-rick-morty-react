import React, { useEffect, useState } from 'react'
import './Main.css'
import { Card } from '../../components/Card/Card'

export const Main = () => {
  const [characters, setCharacters] = useState([])
  const [pageCounter, setPageCounter] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    callApiPages()
  }, [])

  useEffect(() => {
    callApi()
  }, [pageCounter])

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
      <div className="main-container-cards">
        {characters.map(item => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            specie={item.species}
            origin={item.origin.name}
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
    </main>
  )
}
