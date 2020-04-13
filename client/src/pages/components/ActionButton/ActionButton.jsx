import React from 'react'
import PropTypes from 'prop-types'
import '../../components/ActionButton/ActionButton.css'

const ActionButton = ({ icon, title, onClick }) => (
  <button className={`action-button ${icon}`} title={title} onClick={onClick} />
)

ActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default ActionButton
