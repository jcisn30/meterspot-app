//initial state
const initialState = {
    messages: []
}

export const messages = ( state = initialState, action ) => {
    return {
        ...state,
    }
}
export default messages;