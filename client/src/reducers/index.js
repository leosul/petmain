import { SHOW_TOAST, LOGIN, LOGOUT } from "./../actions";
import { REHYDRATE } from "redux-persist";

const initialState = {
    showToast: 0,
    toastMessage: "",
    user: null,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user,
            };

        case LOGOUT:
            return {
                ...state,
                user: null,
            };

        case REHYDRATE:
            if (action.payload) return {...state };
            else return state;

        case SHOW_TOAST:
            return {
                ...state,
                showToast: new Date().getTime(),
                toastMessage: action.message,
            };

        default:
            return state;
    }
}

export default reducer;