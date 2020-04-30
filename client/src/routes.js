import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom'

import { store, persistor } from './store'

import AuthorizedRoute from './pages/authorizedRoute/AuthorizedRoute'
import SigninContainer from './pages/signin/SigninContainer'
import AppContainer from './pages/app/AppContainer'
import PetFormContainer from './pages/petForm/PetFormContainer'
import PetFormListContainer from './pages/petList/PetListContainer'
import WalkerFormContainer from './pages/walkerForm/WalkerFormContainer'
import PetMainCard from './pages/petMainCard/PetMainCard'
import SignoutContainer from './pages/signout/SignoutContainer'

const routes = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <AppContainer>
                    <Switch>
                        <Route path='/signin' component={SigninContainer} exact />
                        <AuthorizedRoute path='/' component={PetMainCard} exact />
                        <AuthorizedRoute path='/pets/:id' component={PetFormContainer} exact />
                        <AuthorizedRoute path='/walkers/:id' component={WalkerFormContainer} exact />
                        <AuthorizedRoute path='/pets' component={PetFormListContainer} exact />
                        <AuthorizedRoute path='/signout' component={SignoutContainer} exact />
                        <Redirect from='*' to='/' />
                    </Switch>
                </AppContainer>
            </Router>
        </PersistGate>
    </Provider>
)

export default routes
