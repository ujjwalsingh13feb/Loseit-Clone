import axios from "axios";
import {
    DELETE_BREAKFAST_ERROR,
    DELETE_BREAKFAST_LOADING,
    DELETE_BREAKFAST_SUCCESS,
    GET_BREAKFAST_ERROR,
    GET_BREAKFAST_LOADING,
    GET_BREAKFAST_SUCCESS,
    POST_BREAKFAST_ERROR,
    POST_BREAKFAST_LOADING,
    POST_BREAKFAST_SUCCESS,
} from "./breakfast.types";

// 1. Get BreakFast
export const getbreakfast = () => async (dispatch) => {
    dispatch({ type: GET_BREAKFAST_LOADING });
    try {
        let response = await axios.get(`https://fitness-club-server.onrender.com/breakfast`); // FOR MONGODB
        let data = response.data;
        dispatch({ type: GET_BREAKFAST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_BREAKFAST_ERROR });
    }
};

//2. Post Breakfast
export const postbreakfast = (payload) => async (dispatch) => {
    console.log('payload:', payload)
    dispatch({ type: POST_BREAKFAST_LOADING });
    try {
        let response = await axios.post(`https://fitness-club-server.onrender.com/breakfast`, payload); // FOR MONGODB
        let data = response.data;
        // console.log('data:', data)
        dispatch({ type: POST_BREAKFAST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: POST_BREAKFAST_ERROR });
    }
};


//3. Delete Breakfast
export const deletebreakfast = (payload) => async (dispatch) => {
    console.log('payload of Delete:', payload)
    dispatch({ type: DELETE_BREAKFAST_LOADING });
    try {
        let response = await axios.delete(
            `https://fitness-club-server.onrender.com/breakfast/${payload.id}`
        );
        dispatch({ type: DELETE_BREAKFAST_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: DELETE_BREAKFAST_ERROR });
    }
};
