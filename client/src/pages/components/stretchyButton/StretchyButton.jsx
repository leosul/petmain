import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './StretchyButton.css'

const StretchyButton = ({ icon, url, title, text }) => (
    <Link className={`stretchy-more ${icon}`} to={url} title={title}>{text}</Link>
)

StretchyButton.propTypes = {
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default StretchyButton