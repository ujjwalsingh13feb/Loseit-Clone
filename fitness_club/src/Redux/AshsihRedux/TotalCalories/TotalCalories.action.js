import { TOTAL_CALORIES_FOOD, TOTAL_CALORIES_EXERCISE, TOTAL_CALORIES_DIFFERENCE, TOTAL_CALORIES_DAILY_BUDGET } from "./TotalCalories.type"



export const totalcaloriesfood = (payload) => async (dispatch) => {
    // console.log('payload Add:', payload);
    dispatch({ type: TOTAL_CALORIES_FOOD, payload });
}
export const totalcaloriesexercise = (payload) => async (dispatch) => {
    // console.log('payload Sub:', payload);
    dispatch({ type: TOTAL_CALORIES_EXERCISE, payload });
}
export const totalcaloriesdifference = (payload) => async (dispatch) => {
    // console.log('payload Sub:', payload);
    dispatch({ type: TOTAL_CALORIES_DIFFERENCE, payload });
}
export const totalcaloriesdailybudget = (payload) => async (dispatch) => {
    // console.log('payload Sub:', payload);
    dispatch({ type: TOTAL_CALORIES_DAILY_BUDGET, payload });
}