import React from 'react'
import './StretchyButton.css'

const StretchyButton = () => (
    <div className='stretchy-container'>
        <div className='container'>
            <button class="stretchy-more-pets">My Pets</button>

        </div>
        <div className='container'>
            <button class="stretchy-more-walker">Become a PetMain</button>
        </div>
        <div className='container'>
            <button class="stretchy-more-find">Find The Perfect PetMain</button>
        </div>
    </div>

)

export default StretchyButton