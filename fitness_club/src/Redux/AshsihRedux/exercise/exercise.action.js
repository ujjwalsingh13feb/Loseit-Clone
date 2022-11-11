import axios from "axios";
import {
    DELETE_EXERCISE_ERROR,
    DELETE_EXERCISE_LOADING,
    DELETE_EXERCISE_SUCCESS,
    GET_EXERCISE_ERROR,
    GET_EXERCISE_LOADING,
    GET_EXERCISE_SUCCESS,
    POST_EXERCISE_ERROR,
    POST_EXERCISE_LOADING,
    POST_EXERCISE_SUCCESS,
} from "./exercise.types";

// 1. Get exercise
export const getexercise = () => async (dispatch) => {
    dispatch({ type: GET_EXERCISE_LOADING });
    try {
        let response = await axios.get(`https://fitness-club-server.onrender.com/exercise`); // FOR MONGODB
        let data = response.data;
        dispatch({ type: GET_EXERCISE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_EXERCISE_ERROR });
    }
};

//2. Post exercise
export const postexercise = (payload) => async (dispatch) => {
    console.log('payload:', payload)
    dispatch({ type: POST_EXERCISE_LOADING });
    try {
        let response = await axios.post(`https://fitness-club-server.onrender.com/exercise`, payload); // FOR MONGODB
        let data = response.data;
        // console.log('data:', data)
        dispatch({ type: POST_EXERCISE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: POST_EXERCISE_ERROR });
    }
};


//3. Delete exercise
export const deleteexercise = (payload) => async (dispatch) => {
    console.log('payload of Delete:', payload)
    dispatch({ type: DELETE_EXERCISE_LOADING });
    try {
        let response = await axios.delete(
            `https://fitness-club-server.onrender.com/exercise/${payload.id}`
        );
        dispatch({ type: DELETE_EXERCISE_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: DELETE_EXERCISE_ERROR });
    }
};
