import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PetListItem from './PetListItem'
import PetListItemPlaceholder from './PetListItemPlaceholder'

class PetListItemContainer extends Component {
  render () {
    return this.props.placeholder
      ? <PetListItemPlaceholder text={this.props.placeholder} />
      : <PetListItem {...this.props} />
  }
}

PetListItemContainer.propTypes = {
  book: PropTypes.object,
  placeholder: PropTypes.string
}

export default PetListItemContainer
