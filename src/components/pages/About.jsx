import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

function About() {
  return (
    <div className='about container-fluid main'>
      <div className='about-text'>
        <h1>ABOUT</h1>
        <hr />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid minima vel corporis officia laborum, neque odit culpa maxime numquam quibusdam?</p>
        <p>Version: 1.0.0</p>
        <p>Author: Odilo</p>
        <Link to='/' className='btn btn-dark btn-lg'><HomeIcon/> Back home</Link>
        <hr />
      </div>
    </div>
  )
}

export default About