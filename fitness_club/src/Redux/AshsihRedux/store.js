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
import { dinnerReducer } from "./dinner/dinner.reducer";
import { exerciseReducer } from "./exercise/exercise.reducer";
import { lunchReducer } from "./lunch/lunch.reducer";
import { snacksReducer } from "./snacks/snacks.reducer";
import { totalCaloriesReducer } from "./TotalCalories/TotalCalories.reducer";

const rootReducer = combineReducers({
    breakfast: breakfastReducer,

    AuthReducer:AuthReducer,
    Reducer:Reducer,
    //  hello i am conflict 
    dinner: dinnerReducer,
    lunch: lunchReducer,
    snack: snacksReducer,
    exercise: exerciseReducer,
    totalcalories: totalCaloriesReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk)),


    // applyMiddleware(thunk) 
);
