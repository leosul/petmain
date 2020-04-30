import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ToastContainer } from './../components'
import './App.css'

const App = ({ children, user }) => {
    return (
        <main>
            <header className='app-header'>
                <h1 className='app-title'>
                    <Link to='/'>
                        PetMain
            <span>beta</span>
                    </Link>
                </h1>
                {user &&
                    <span className='user'>
                        <Link className='wrapper' to='/signout'>
                            <span className='picture' style={{ backgroundImage: `url(${user.picture})` }} />
                            <span className='name'>{user.name}</span>
                        </Link>
                    </span>
                }
            </header>
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
