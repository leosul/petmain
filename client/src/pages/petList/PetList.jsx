import React from 'react'
import PropTypes from 'prop-types'
import PetListItemContainer from './components/PetListItemContainer'
import { FloatingButton, ListLoader } from './../components'
import InfiniteScroll from 'react-infinite-scroller'
import './PetList.css'

const PetList = ({ pets, hasNextPage, loadPets, listProgress }) => (
  <div id='pet-list'>
    <header>
        <h1>Teste</h1>
    </header>
    <InfiniteScroll className='pet-list' pageStart={1} hasMore={hasNextPage} loadMore={loadPets} loader={<ListLoader key={0} />}>
      {
        (!hasNextPage && pets.length === 0)
          ? <PetListItemContainer key={'placeholder'} placeholder={'Add your PetMain'} />
          : pets.map(pet =>
            <PetListItemContainer key={pet._id} book={pet} />
          )
      }
    </InfiniteScroll>
    {listProgress < 100 &&
      <FloatingButton icon='add' url='/pets/new' title={'Add new PetMain'} />
    }
  </div>
)

PetList.propTypes = {
  R: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  loadBooks: PropTypes.func.isRequired
}

export default PetList
