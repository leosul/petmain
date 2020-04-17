import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Fetcher from './../../utils/Fetcher'

class AuthorizedRoute extends Component {
  render () {
    const { component: Component, dispatch, ...rest } = this.props
    return (
      <Route {...rest} render={props => {
        
        props.fetcher = new Fetcher()
        return <Component {...props} />
      }} />
    )
  }
}

//AuthorizedRoute.propTypes = {
//  R: PropTypes.object.isRequired,
//  user: PropTypes.object
//}

const stateToProps = () => ({

})

export default connect(stateToProps)(AuthorizedRoute)
