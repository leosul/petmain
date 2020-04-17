import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PetForm from './PetForm'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { showToast } from './../../actions'
const { confirm } = window

class PetFormContainer extends Component {
    constructor(props) {
        super(props)

        this.fetcher = this.props.fetcher
        const { match: { params: { id } }, location: { state } } = this.props
        const pet = state && state.pet

        this.state = {
            redirect: false,
            id: (id !== 'new') ? id : '',
            name: (pet && pet.name) || '',
            breed: (pet && pet.breed) || '',
            size: (pet && pet.size) || '',
            weight: (pet && pet.weight) || '',
        }

        this.loadPet = this.loadPet.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        const { id } = this.state

        if (id) {
            this.loadPet(id)
        }
    }

    async loadPet(id) {

        const res = await this.fetcher.get(`pets/${id}`)

        if (res.ok) {
            const pet = await res.json()
            this.setState(() => ({
                name: pet.name,
                breed: pet.breed,
                size: pet.size,
                weight: pet.weight
            }))
        } else {
            this.setState(() => ({ redirect: true }))
        }
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
            this.setState(() => ({ redirect: false }))
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
                this.setState(() => ({ redirect: false }))
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
