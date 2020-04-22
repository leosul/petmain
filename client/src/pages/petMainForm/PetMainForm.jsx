import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './PetMainForm.css'

const PetMainForm = ({ url, text }) => (
    <Link className='petmain-form-link' to={url} title={text} >{text}</ Link >
)

PetMainForm.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default PetMainForm