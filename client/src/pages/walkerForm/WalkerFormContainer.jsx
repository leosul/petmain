import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WalkerForm from './WalkerForm'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { showToast } from './../../actions'

class WalkerFormContainer extends Component {
    constructor(props) {
        super(props)

        this.fetcher = this.props.fetcher
        const { match: { params: { id } }, location: { state } } = this.props
        const walker = state && state.walker

        this.state = {
            redirect: false,
            pageTitle: (id === 'new') ? 'Add new Walker' : 'Edit Walker',
            id: (id !== 'new') ? id : '',
            name: (walker && walker.name) || '',
            title: (walker && walker.title) || '',
            country: (walker && walker.country) || '',
            about: (walker && walker.about) || '',
            price: (walker && walker.price) || ''
        }

        this.loadWalker = this.loadWalker.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const { id } = this.state

        if (id) {
            this.loadWalker(id)
        }
    }

    async loadWalker(id) {

        const res = await this.fetcher.get(`walkers/${id}`)

        if (res.ok) {
            const walker = await res.json()
            this.setState(() => ({
                name: walker.name,
                title: walker.title,
                country: walker.country,
                about: walker.about,
                price: walker.price
            }))
        } else {
            this.setState(() => ({ redirect: true }))
        }
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, title, country, about, price } = this.state
        const walker = {
            name: name.trim(),
            title: title.trim(),
            country: country.trim(),
            about: about.trim(),
            price: price.trim()
        }

        const res = await this.fetcher.post('walkers', walker)

        if (res.ok) {
            this.setState(() => ({ redirect: true }))
            this.props.dispatch(showToast('Walker Saved'))
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

    render() {
        return this.state.redirect ? <Redirect to='/' /> :
            <WalkerForm
                {...this.props}
                {...this.state}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
    }
}

WalkerFormContainer.propTypes = {
    fetcher: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}


const stateToProps = () => ({
})

export default withRouter(connect(stateToProps)(WalkerFormContainer))
