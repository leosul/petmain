import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom'

import { store, persistor } from './store'

import AuthorizedRoute from './pages/authorizedRoute/AuthorizedRoute'
import MainFormContainer from './pages/main/MainFormContainer'
import AppContainer from './pages/app/App'
import PetFormContainer from './pages/petForm/PetFormContainer'
import PetFormListContainer from './pages/petList/PetListContainer'
import WalkerFormContainer from './pages/walkerForm/WalkerFormContainer'

const routes = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <AppContainer>
                    <Switch>
                        <AuthorizedRoute path='/' component={MainFormContainer} exact />
                        <AuthorizedRoute path='/pets/:id' component={PetFormContainer} exact />
                        <AuthorizedRoute path='/walkers/:id' component={WalkerFormContainer} exact />
                        <AuthorizedRoute path='/pets' component={PetFormListContainer} exact />
                        <Redirect from='*' to='/' />
                    </Switch>
                </AppContainer>
            </Router>
        </PersistGate>
    </Provider>
)

export default routes
