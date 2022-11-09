import {ADD} from "./activity.actionTypes";
export const ADDTODO=(payload)=>{
    console.log("i am payload",payload)
    return {
        type:ADD,
        payload:{
            id:Date.now(),
            ...payload
        }
    }
}