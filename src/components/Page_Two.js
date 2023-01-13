import React from 'react'
import { useNavigate } from 'react-router-dom'

function Page_Two() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Page 02</h1>
        <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Page_Two
