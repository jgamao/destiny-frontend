import React from 'react'
import { Link } from 'react-router-dom'

export default function Test() {
  return (
    <div className="container">
      <h1>Test</h1>
      <p>
        Back to <Link to="/">Home</Link> page
      </p>
    </div>
  )
}