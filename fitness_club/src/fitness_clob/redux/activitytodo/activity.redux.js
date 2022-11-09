import {ADD} from "./activity.actionTypes";
const initialstate={
    todos:[]
}
export const Todoreducer=(state=initialstate,action)=>{
    console.log("action",action)
switch(action.type){
    case ADD:{
    return {
        ...state,
        todos: [...state.todos, action.payload],
    }
}

default: return state
}
}