import {
    legacy_createStore,
    compose,
    applyMiddleware,
    combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "../LoginRedux/AuthReducer";
import { Reducer } from "../LoginRedux/Reducer";
import { breakfastReducer } from "./breakfast/breakfast.reducer";

const rootReducer = combineReducers({
    breakfast: breakfastReducer,

    AuthReducer:AuthReducer,
    Reducer:Reducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk)),


    // applyMiddleware(thunk) 
);
