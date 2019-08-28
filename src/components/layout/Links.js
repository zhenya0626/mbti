import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <ul>
      <li><NavLink to='/statistics'>統計</NavLink></li>
      <li><NavLink to='/pt-diagnosis'>診断</NavLink></li>
      <li><NavLink to='/sign-up'>新規登録</NavLink></li>
      <li><NavLink to='/login'>ログイン</NavLink></li>
    </ul>
  )
}

export default Links