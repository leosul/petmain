import React, { Component } from 'react'
import PetForm from './PetForm'
import Fetcher from './../../utils/Fetcher'
const { confirm } = window

export default class PetFormContainer extends Component {
    constructor(props) {
        super(props)

        this.fetcher = new Fetcher()

        this.state = {
            name: '',
            breed: '',
            size: '',
            weight: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    async handleSubmit() {
        const { name, breed, size, weight } = this.state

        const pet = {
            name: name.trim(),
            breed: breed.trim(),
            size: size.trim(),
            weight: weight.trim()
        }

        const res = await this.fetcher.post('pets', pet)

        if (res.ok) {
            confirm('Save')
        }
        else {
            confirm('Problem')
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
            } else {
            }
        }
    }

    render() {
        return <PetForm
            name={this.state.name}
            breed={this.state.breed}
            size={this.state.size}
            weight={this.state.weight}

            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            onDelete={this.handleDelete}
        />
    }
}