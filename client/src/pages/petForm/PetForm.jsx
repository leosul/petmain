import React from 'react'

const PetForm = ({
    id,
    name,
    breed,
    size,
    weight,
    onChange,
    onSubmit,
    onClickDelete
}) => (
    <div id='pet-form'>
        <header>
            <h2>Page Pet Form</h2>
        </header>

        <form method='post' action='/' onSubmit={onSubmit}>
            <label for='name'>Name</label>
            <input type='text' id='name'></input>

            <label for='breed'>Breed</label>
            <input type='text' id='breed'></input>

            <label for='size'>Size</label>
            <input type='text' id='size'></input>

            <label for='weight'>Weight</label>
            <input type='text' id='weight'></input>
        </form>
    </div>
)

export default PetForm