import {  TOTAL_CALORIES_ADD, TOTAL_CALORIES_SUB } from "./TotalCalories.type"



export const totalcaloriesadd = (payload) => async (dispatch) => {
    console.log('payload Add:', payload);
    dispatch({ type: TOTAL_CALORIES_ADD, payload });
}
export const totalcaloriessub = (payload) => async (dispatch) => {
    console.log('payload Sub:', payload);
    dispatch({ type: TOTAL_CALORIES_SUB, payload });
}