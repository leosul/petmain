import SHOW_TOAST from "./../actions";

const initialState = {
    showToast: 0,
    toastMessage: "",
};

function reducer(state = initialState, action) {
    switch (action.type) {
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