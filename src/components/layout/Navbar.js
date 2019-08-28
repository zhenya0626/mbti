import React from 'react'
import { Link } from 'react-router-dom'
import Links from './Links'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to='/pt-list'>Top</Link>
        <Links></Links>
      </div>
    </nav>
  )
}

export default Navbar