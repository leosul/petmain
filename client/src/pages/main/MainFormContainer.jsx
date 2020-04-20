import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MainForm from './MainForm'

class MainFormContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mainItems: []
        }

        this.loadMain = this.loadMain.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.loadMain()
    }

    loadMain() {
        const list = [{
            name: "Nome 01"
        },
        {
            name: "Nome 02"
        },
        {
            name: "Nome 03"
        },
        {
            name: "Nome 04"
        }]

        this.setState(() => ({ mainItems: list }))
        //alert(this.state.mainItems.lenght)
    }

    onChange() {
        alert(this.state.index)
        this.setState(() => ({index: this.state.index}))
    }

    render() {
        return (
            <MainForm onChange={this.onChange} list={this.state.mainItems} index={this.state.index} />
        )
    }
}

const stateToProps = () => ({
})

export default withRouter(connect(stateToProps)(MainFormContainer))
