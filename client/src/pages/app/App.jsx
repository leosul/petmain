import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ToastContainer } from './../components'
import './App.css'

const App = ({ children }) => {
    return (
        <main>
            <header className='app-header'>
                <h1 className='app-title'>
                    <Link to='/'>
                        PetMain
            <span>beta</span>
                    </Link>
                </h1>
                <span className='user'>
                    <Link className='wrapper' to='/pets'>
                        <span className='picture' />
                        <span className='name'>User Test</span>
                    </Link>
                </span>
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
