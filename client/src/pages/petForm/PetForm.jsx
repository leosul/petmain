import React from 'react'
import PropTypes from 'prop-types'
import './PetForm.css'
import { ActionButton, InputButton, InputField } from './../components'

const PetForm = props => (
    <div id='pet-form'>
        <header>
            <h2>{'Register your PetMain'}</h2>
            <nav className='action-items'>
                <ActionButton icon='delete' title={'Delete'} onClick={props.onDelete} />
            </nav>
        </header>
        <form method='post' action='/' onSubmit={props.onSubmit}>
            <InputField
                label={'Name'}
                name='name'
                value={props.name}
                onChange={props.onChange}
                readOnly={false}
                required
                maxLength={100}
                pattern='.*[\w]+.*'
                autoFocus />

            <InputField
                label={'Breed'}
                name='breed'
                value={props.breed}
                onChange={props.onChange}
                readOnly={false}
                pattern='.*[\w]+.*'
                required
                maxLength={100} />

            <InputField
                label={'Size'}
                name='size'
                value={props.size}
                onChange={props.onChange}
                readOnly={false}
                pattern='.*[\w]+.*'
                required
                maxLength={100} />

            <InputField
                label={'Weight'}
                name='weight'
                value={props.weight}
                onChange={props.onChange}
                readOnly={false}
                pattern='.*[\w]+.*'
                required
                maxLength={100} />

            <div>
                <InputButton type='submit' text={'Save'} disabled={false} />
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