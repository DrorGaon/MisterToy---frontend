

const initialState = {
    placeHolder: '',
}

export function userReducer(state = initialState, action = {}){
    switch (action.type) {

        case 'TEST':
            return state = { ...state, placeHolder: action.placeHolder }
        
        default:
            return state
    }
}