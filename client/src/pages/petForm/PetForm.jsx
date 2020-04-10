import React from 'react'
import PropTypes from 'prop-types'

const PetForm = ({
    name,
    breed,
    size,
    weight,
    onChange,
    onSubmit
}) => (
        <div id='pet-form'>
            <header>
                <h2>Page Pet Form</h2>
            </header>

            <form method='post' action='/' onSubmit={onSubmit}>
                <label for='name'>Name</label>
                <input type='text' id='name' value={name} onChange={onChange}></input>

                <label for='breed'>Breed</label>
                <input type='text' id='breed' value={breed} onChange={onChange}></input>

                <label for='size'>Size</label>
                <input type='text' id='size' value={size} onChange={onChange}></input>

                <label for='weight'>Weight</label>
                <input type='text' id='weight' value={weight} onChange={onChange}></input>

                <div>
                    <input type='submit' />
                </div>
            </form>
        </div>
    )

PetForm.propTypes = {
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default PetForm