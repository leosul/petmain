import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PetList from './PetList'

class PetListContainer extends Component {
  constructor (props) {
    super(props)

    this.fetcher = this.props.fetcher

    this.state = {
      pets: [],
      hasNextPage: true,
      nextPage: 1,
      listProgress: 0
    }

    this.loadPets = this.loadPets.bind(this)
  }

  async loadPets () {
    const res = await this.fetcher.get(`pets?page=${this.state.nextPage}`)

    if (res.ok) {
      let { pets, hasNextPage, nextPage, totalDocs } = await res.json()
      pets = [...this.state.pets, ...pets]

      this.setState({ pets, hasNextPage, nextPage, listProgress: totalDocs })
    }
  }

  render () {
    return (
      <PetList {...this.props} {...this.state} loadPets={this.loadPets} />
    )
  }
}

PetListContainer.propTypes = {
  fetcher: PropTypes.object.isRequired
}

const stateToProps = () => ({
})

export default withRouter(connect(stateToProps)(PetListContainer))
