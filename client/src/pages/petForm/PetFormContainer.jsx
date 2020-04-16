import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PetForm from './PetForm'
import { connect } from 'react-redux'
import Fetcher from './../../utils/Fetcher'
import { withRouter, Redirect } from 'react-router-dom'
import { showToast } from './../../actions'
const { confirm } = window

class PetFormContainer extends Component {
    constructor(props) {
        super(props)

        this.fetcher = new Fetcher()

        this.state = {
            redirect: false,
            name: '',
            breed: '',
            size: '',
            weight: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, breed, size, weight } = this.state
        const pet = {
            name: name.trim(),
            breed: breed.trim(),
            size: size.trim(),
            weight: weight.trim()
        }

        const res = await this.fetcher.post('pets', pet)

        if (res.ok) {
            this.setState(() => ({ redirect: true }))
            this.props.dispatch(showToast('Pet Saved'))
        }
        else {
            this.setState(() => ({ saving: false }))
            this.props.dispatch(showToast('Failed to Save'))
        }
    }

    handleChange(e) {
        const { target: { value, name } } = e
        this.setState(() => ({ [name]: value }))
    }

    async handleDelete() {
        const shouldDelete = confirm('Are you confirm this deletion?')
        if (shouldDelete) {
            const { id } = this.state
            const res = await this.fetcher.delete(`pets/${id}`)
            if (res.ok) {
                this.setState(() => ({ redirect: true }))
                this.props.dispatch(showToast('Pet Deleted'))
            } else {
                this.setState(() => ({ saving: false }))
                this.props.dispatch(showToast('Failed to Delete'))
            }
        }
    }

    render() {
        return this.state.redirect ? <Redirect to='/' /> :
            <PetForm
                {...this.props}
                {...this.state}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onDelete={this.handleDelete}
            />
    }
}

PetFormContainer.propTypes = {
    fetcher: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}


const stateToProps = () => ({
})

export default withRouter(connect(stateToProps)(PetFormContainer))
