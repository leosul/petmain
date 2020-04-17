import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PetListItem = ({ pet }) => (
  <Link className='pet-list-item' to={{
    pathname: `/pets/${pet._id}`,
    state: { pet }
  }}>
    <span>{pet.name}</span>
    <span>{pet.breed}</span>
    <span>{pet.size}</span>
    <span>{pet.weight}</span>
  </Link>
)

PetListItem.propTypes = {
  pet: PropTypes.object.isRequired
}

export default PetListItem
