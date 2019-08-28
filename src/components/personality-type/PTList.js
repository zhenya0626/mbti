import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class PTList extends Component {
  render(){
    return (
      <div>
        <ul>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'estj',TYPE: 'ESTJ'}}}>ESTJ</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'istj',TYPE: 'ISTJ'}}}>ISTJ</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'esfj',TYPE: 'ESFJ'}}}>ESFJ</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'isfj',TYPE: 'ISFJ'}}}>ISFJ</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'estp',TYPE: 'ESTP'}}}>ESTP</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'istp',TYPE: 'ISTP'}}}>ISTP</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'esfp',TYPE: 'ESFP'}}}>ESFP</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'isfp',TYPE: 'ISFP'}}}>ISFP</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'entj',TYPE: 'ENTJ'}}}>ENTJ</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'intj',TYPE: 'INTJ'}}}>INTJ</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'entp',TYPE: 'ENTP'}}}>ENTP</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'intp',TYPE: 'INTP'}}}>INTP</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'enfj',TYPE: 'ENFJ'}}}>ENFJ</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'infj',TYPE: 'INFJ'}}}>INFJ</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'enfp',TYPE: 'ENFP'}}}>ENFP</NavLink></li>
          <li><NavLink to={{pathname: '/pt-desc', state: {type: 'infp',TYPE: 'INFP'}}}>INFP</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default PTList