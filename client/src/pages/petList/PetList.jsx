import React from 'react'
import PropTypes from 'prop-types'
import PetListItemContainer from './components/PetListItemContainer'
import { FloatingButton, ListLoader } from './../components'
import InfiniteScroll from 'react-infinite-scroller'
import './PetList.css'

const PetList = ({ pets, hasNextPage, loadPets }) => (
    <div id='pet-list'>
        <header>
            <h1>My Pets</h1>
        </header>
        <InfiniteScroll className='pet-list' pageStart={1} hasMore={hasNextPage} loadMore={loadPets} loader={<ListLoader key={0} />}>
            {
                (!hasNextPage && pets.length === 0)
                    ? <PetListItemContainer key={'placeholder'} placeholder={'Add your PetMain'} />
                    : pets.map(pet =>
                        <PetListItemContainer key={pet._id} pet={pet} />
                    )
            }
        </InfiniteScroll>
        {pets.length > 0 &&
            <FloatingButton icon='add' url='/pets/new' title={'Add new PetMain'} />
        }
    </div>
)

PetList.propTypes = {
    pets: PropTypes.array.isRequired,
    hasNextPage: PropTypes.bool.isRequired,
    loadPets: PropTypes.func.isRequired
}

export default PetList
