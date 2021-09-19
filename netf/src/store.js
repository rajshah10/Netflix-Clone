import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { authReducer } from "./auth.reducer"

// To store all reducers
const rootReducer=combineReducers({
    auth:authReducer
})
//creating store to store state of your application
const store=createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;