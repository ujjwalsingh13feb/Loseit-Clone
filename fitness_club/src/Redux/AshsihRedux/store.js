import {
    legacy_createStore,
    compose,
    applyMiddleware,
    combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { breakfastReducer } from "./breakfast/breakfast.reducer";

const rootReducer = combineReducers({
    breakfast: breakfastReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
);
