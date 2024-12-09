import { toyService } from "../../services/toy-service.js"

export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const SET_FILTER_BY = 'SET_FILTER_BY'

const initialState = {
    toys: [],
    filterBy: toyService.getDefaultFilter()
}

export function toyReducer(state = initialState, action = {}){
    switch (action.type) {

        case SET_TOYS:
            return state = { ...state, toys: action.toys }
        case REMOVE_TOY:
            return state = { 
                ...state, 
                toys: state.toys.filter(toy => toy._id !== action.toyId) 
            }
        case ADD_TOY:
            return state = {
                ...state,
                toys: [action.toy, ...state.toys]
            }
        case UPDATE_TOY:
            return state = { 
                ...state, 
                toys: state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            }
        case SET_FILTER_BY:
            return state = { ...state, filterBy: action.filterBy }
        
        default:
            return state
    }
}

