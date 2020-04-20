import React from 'react'
//import './MainForm.css'
import { TabControl } from './../components'

const MainForm = props => (
    <div className='pet-form'>
        <header>
        </header>
        <div className='tab-list'>
            <TabControl onChange={props.onChange} list={props.list} index={props.index} />
        </div>
    </div>
)

export default MainForm