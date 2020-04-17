import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PetListItemPlaceholder = ({ text }) => (
  <Link className='pet-list-item placeholder' to='/pets/new'>
    <span>{text}</span>
  </Link>
)

PetListItemPlaceholder.propTypes = {
  text: PropTypes.string.isRequired
}

export default PetListItemPlaceholder
