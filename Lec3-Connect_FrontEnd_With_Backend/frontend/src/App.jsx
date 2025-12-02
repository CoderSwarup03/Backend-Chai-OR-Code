import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useState } from 'react'
import UserList from './components/UserList';

const App = () => {
  const [jokes, setJokes] = useState([])

  const fetchJokes = async () => {
    const response = await axios.get('/api/jokes');
    const data = response.data
    setJokes(data)
  }
  useEffect(() => {
    fetchJokes()
  }, [])
  return (
    <>
      <div>
        <h1>Backed API data call</h1>
        <UserList jokes={jokes} />
      </div>
    </>
  )
}

export default App