import React from 'react'
import PropTypes from 'prop-types'
import './WalkerForm.css'
import { InputButton, InputField } from '../components'

const WalkerForm = props => (
    <div id='walker-form'>
        <header>
            <h2>{props.pageTitle}</h2>
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
                label={'Title'}
                name='title'
                value={props.title}
                onChange={props.onChange}
                readOnly={false}
                pattern='.*[\w]+.*'
                required
                maxLength={100} />

            <InputField
                label={'Country'}
                name='country'
                value={props.country}
                onChange={props.onChange}
                readOnly={false}
                pattern='.*[\w]+.*'
                required
                maxLength={100} />

            <InputField
                label={'About'}
                name='about'
                value={props.about}
                onChange={props.onChange}
                readOnly={false}
                pattern='.*[\w]+.*'
                required
                maxLength={500} />

            <InputField
                label={'Price'}
                name='price'
                value={props.price}
                onChange={props.onChange}
                readOnly={false}
                pattern='.*[\w]+.*'
                required
                maxLength={500} />

            <div>
                <InputButton type='submit' text={'Save'} disabled={false} />
            </div>
        </form>

    </div>
)

WalkerForm.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default WalkerForm