import axios from "axios";
import {
    DELETE_BREAKFAST_ERROR,
    DELETE_BREAKFAST_LOADING,
    DELETE_BREAKFAST_SUCCESS,
    GET_BREAKFAST_ERROR,
    GET_BREAKFAST_LOADING,
    GET_BREAKFAST_SUCCESS,
} from "./breakfast.types";

// 1. Get BreakFast
export const getbreakfast = () => async (dispatch) => {
    dispatch({ type: GET_BREAKFAST_LOADING });
    try {
        let response = await axios(`http://localhost:3801/breakfast`); // FOR MONGODB
        let data = response.data;
        dispatch({ type: GET_BREAKFAST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_BREAKFAST_ERROR });
    }
};

//2. Delete Breakfast
export const deletebreakfast = (payload) => async (dispatch) => {
    dispatch({ type: DELETE_BREAKFAST_LOADING });
    try {
        let response = await axios.delete(
            `http://localhost:3801/breakfast/${payload.id}`
        );
        let data = response.data;
        dispatch({ type: DELETE_BREAKFAST_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: DELETE_BREAKFAST_ERROR });
    }
};
