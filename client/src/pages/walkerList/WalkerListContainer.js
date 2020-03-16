import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class WalkerListContainer extends Component {
  constructor (props) {
    super(props)

    this.fetcher = this.props.fetcher

    this.state = {
      books: [],
      hasNextPage: true,
      nextPage: 1,
      listProgress: 0
    }
  }

  render () {
    return (
      <div>
          <h1>WalkerListContainer</h1>
      </div>
    )
  }
}

WalkerListContainer.propTypes = {
  R: PropTypes.object.isRequired,
  fetcher: PropTypes.object.isRequired
}

const stateToProps = () => ({
})

export default withRouter(connect(stateToProps)(WalkerListContainer))
