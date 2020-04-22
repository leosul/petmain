import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PetIcon from '@material-ui/icons/PetsTwoTone';
import WalkerIcon from '@material-ui/icons/DirectionsWalkTwoTone';
import FindIcon from '@material-ui/icons/FindInPageTwoTone';
import MainForm from './MainForm'
import PetMainForm from './../petMainForm/PetMainForm'

class MainFormContainer extends Component {
    constructor(props) {
        super(props)

        const store = [{
            index: 0,
            label: 'My Pets',
            icon: <PetIcon />,
            component: <PetMainForm url={'/pets'} text='View My Pets' />
        },
        {
            index: 1,
            label: 'Become a PetMain',
            icon: <WalkerIcon />,
            component: <PetMainForm url={'/pets'} text='Become a PetMain' />
        },
        {
            index: 2,
            label: 'Find Walkers',
            icon: <FindIcon />,
            component: <PetMainForm url={'/pets'} text='Find Walkers' />
        }
    ];
        this.state = {
            store: store,
            index: 0
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(e, newIndex) {
        this.setState(() => ({index: newIndex}))
    }

    render() {
        return (
            <MainForm store={this.state.store} onChange={this.onChange} index={this.state.index}/>
        )
    }
}

const stateToProps = () => ({
})

export default withRouter(connect(stateToProps)(MainFormContainer))
