import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ToastContainer } from './../components'
import './App.css'

const App = ({ children }) => {
  return (
    <main className={'unauthorized'}>
      <header className='app-header'>
        <h1 className='app-title'>
          <Link to='/'>
            petmain
            <span>beta</span>
          </Link>
        </h1>
          <span className='user'>User Test</span>
      </header>
      <section className='content'>
        {children}
      </section>
      <footer />
      <ToastContainer />
    </main>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  user: PropTypes.object
}

export default App
