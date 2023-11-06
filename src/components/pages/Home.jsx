import React from 'react'
import Form from '../users/Form'
import UseResults from '../users/UseResults'

function Home() {
  return (
    <div className='container-fluid main home' >
      <Form />
      <UseResults/>
    </div>
  )
}

export default Home