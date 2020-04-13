import React from 'react'
import './PetForm.css'
import { ActionButton, InputButton } from './../components'

export default props => (
    <div className='pet-form'>
        <header>
            <h2>Register your PetMain</h2>

            <nav>
                <ActionButton icon='delete' title={'Delete'} onClick={props.onClickDelete} />
            </nav>
        </header>
        <form onSubmit={props.onSubmit}>
            <div>
                <label className='input-field'>
                    <span>Name</span>
                    <input type='text' name='name' onChange={props.onChange} value={props.name} />

                </label>

                <label className='input-field'>
                    <span>Breed</span>
                    <input type='text' name='breed' onChange={props.onChange} value={props.breed} />
                </label>
                <label className='input-field'>
                    <span>Size</span>
                    <input type='text' name='size' onChange={props.onChange} value={props.size} />
                </label>
                <label className='input-field'>
                    <span>Weight</span>
                    <input type='text' name='weight' onChange={props.onChange} value={props.weight} />
                </label>

                <div>
                    <InputButton type='submit' text={'Save'} disabled={false} />
                </div>
            </div>
        </form>
    </div>
)