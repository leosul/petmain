import React from 'react'
//import './MainForm.css'
import { TabControl } from './../components'

const MainForm = props => (
    <div className='pet-form'>
        <header>
        </header>
        <div className='tab-list'>
            <TabControl store={props.store} onChange={props.onChange} index={props.index}/>
        </div>
    </div>
)

export default MainForm