import { combineReducers, legacy_createStore as createStore, compose } from "redux";

import { toyReducer } from "./reducers/toy.reducer";
import { userReducer } from "./reducers/user.reducer";

const rootReducer = combineReducers({
    toyModule: toyReducer,
    userModule: userReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers())