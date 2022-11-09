import { legacy_createStore,compose,combineReducers} from "redux";
import {Todoreducer} from "./redux/activitytodo/activity.redux"
const rootreducer=combineReducers({
    todo:Todoreducer,
   
  })
export const store=legacy_createStore(rootreducer,compose())