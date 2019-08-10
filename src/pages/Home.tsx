import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

interface InitialState {
  data: []
  loading: boolean
}

export default function HomePage() {
  const initial_state: InitialState = {
    data: [],
    loading: true,
  }

  // Sample Setter for <page> state (Update vars depends on the page)
  const [data, setData] = useState(initial_state.data)
  const [loading, setLoading] = useState(initial_state.loading)

  // Sample on mount task
  useEffect(() => {
    // Example Async function to get data
    const getData = async () => {
      const { data } = await axios('https://api.github.com/users')

      setData(data)
      setLoading(false)
    }
    
    // Invoke async function
    getData()
  }, [])

  return !!loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        Navigate to <Link to="/test">Test</Link>
      </p>
      <div>
        There are {data.length} users
      </div>
    </div>
  )
}