import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './PetMainForm.css'

const PetMainForm = ({ url, text }) => (
    <div className='petmain-form'>
        <div className='petmain-left'>
            <h1 className='petmain-title'>My Pets</h1>
            <h3 className='petmain-description'>
                Your list of pets! Register your pets here to find the best PetMain Walker!
            </h3>
            <Link className='petmain-form-link' to={url} title={text} >{text}</ Link >
        </div>

        <div className='petmain-right'>
            <img className='petmain-img' alt='' src='/images/main/pet_main_pets.png' />
        </div>
    </div>
)

PetMainForm.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default PetMainForm