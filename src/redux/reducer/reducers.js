import { PENDING, FULFILL, ERROR } from "../Actions";

const initialState = {
    product: [],
    isLoading: false,
    error: null
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PENDING: return { ...state, isLoading: true }
        case FULFILL: return { ...state, product: action.payload, isLoading: false }
        case ERROR: return { ...state, error: action.payload, isLoading: false }
        default: return state

    }
}

export default reducer