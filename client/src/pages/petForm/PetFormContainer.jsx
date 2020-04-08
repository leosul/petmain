import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PetForm from './PetForm'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

class PetFormContainer extends Component{
    constructor(props){
        super(props)

        this.fetcher = this.props.fetcher

        const pet = state && state.pet

        this.state = {
            id: (id !== 'new') ? id : '',
            name: pet.name,
            breed: pet.breed,
            size: pet.size,
            weight: pet.weight
        }

        this.loadPet = this.loadPet.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount () {
      const { id } = this.state
  
      if (id) {
        this.loadPet(id)
      }
    }
  
    handleChange (e) {
      const { target: { value, name } } = e
      this.setState(() => ({ [name]: value }))
    }

    async loadPet (id) {
      const res = await this.fetcher.get(`pets/${id}`)
  
      if (res.ok) {
        const pet = await res.json()
        this.setState(() => ({
          name: pet.name,
          breed: pet.breed,
          size: pet.size,
          weight: pet.weight,
        }))
      } else {
        this.setState(() => ({ redirect: true }))
      }
    }

    async handleSubmit (e) {
        e.preventDefault()
    
        const { id, name, breed, size, weight } = this.state
        const pet = {
          name: name.trim(),
          breed: breed.trim(),
          size: size.trim(),
          weight: weight.trim()
        }
    
        this.setState(() => ({  }))
    
        if (!id) {
          const res = await this.fetcher.post('pets', pet)
          if (res.ok) {
            this.setState(() => ({ redirect: true }))
            //this.props.dispatch(showToast(this.props.R.strings.bookSaved))
          } else {
            this.setState(() => ({ saving: false }))
            //this.props.dispatch(showToast(this.props.R.strings.savingFailedTryAgain))
          }
        } else {
          const res = await this.fetcher.put(`pets/${id}`, pet)
          if (res.ok) {
            this.setState(() => ({ redirect: true }))
            //this.props.dispatch(showToast(this.props.R.strings.bookSaved))
          } else {
            this.setState(() => ({ saving: false }))
            //this.props.dispatch(showToast(this.props.R.strings.savingFailedTryAgain))
          }
        }
      }

      render () {
        return this.state.redirect
          ? <Redirect to='/pets' />
          : <PetForm
            {...this.props}
            {...this.state}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
      }
}

PetFormContainer.propTypes = {
  fetcher: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const stateToProps = () => ({
})

export default withRouter(connect(stateToProps)(PetFormContainer))
