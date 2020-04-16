import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import { store, persistor } from './store'

import AppContainer from './pages/app/App'
import PetFormContainer from './pages/petForm/PetFormContainer'

const routes = (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppContainer>
            <Switch>
              <Route path='/pets' component={PetFormContainer} exact />
              <Redirect from='*' to='/' />
            </Switch>
          </AppContainer>
        </Router>
      </PersistGate>
    </Provider>
  )

export default routes
