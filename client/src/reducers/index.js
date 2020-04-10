import { REHYDRATE } from 'redux-persist'

function reducer(state = initialState, action) {
    switch (action.type) {
        case REHYDRATE:
            if (action.payload) {
                return {
                    ...state
                }
            } else {
                return state
            }

        default:
            return (state)
    }
}

export default reducer