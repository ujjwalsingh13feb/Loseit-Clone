import axios from "axios";
import {
    DELETE_LUNCH_ERROR,
    DELETE_LUNCH_LOADING,
    DELETE_LUNCH_SUCCESS,
    GET_LUNCH_ERROR,
    GET_LUNCH_LOADING,
    GET_LUNCH_SUCCESS,
    POST_LUNCH_ERROR,
    POST_LUNCH_LOADING,
    POST_LUNCH_SUCCESS,
} from "./lunch.types";

// 1. Get lunch
export const getlunch = () => async (dispatch) => {
    dispatch({ type: GET_LUNCH_LOADING });
    try {
        let response = await axios.get(`https://fitness-club-server.onrender.com/lunch`); // FOR MONGODB
        let data = response.data;
        dispatch({ type: GET_LUNCH_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_LUNCH_ERROR });
    }
};

//2. Post lunch
export const postlunch = (payload) => async (dispatch) => {
    console.log('payload:', payload)
    dispatch({ type: POST_LUNCH_LOADING });
    try {
        let response = await axios.post(`https://fitness-club-server.onrender.com/lunch`, payload); // FOR MONGODB
        let data = response.data;
        dispatch({ type: POST_LUNCH_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: POST_LUNCH_ERROR });
    }
};


//3. Delete lunch
export const deletelunch = (payload) => async (dispatch) => {
    console.log('payload of Delete:', payload)
    dispatch({ type: DELETE_LUNCH_LOADING });
    try {
        let response = await axios.delete(
            `https://fitness-club-server.onrender.com/lunch/${payload.id}`
        );
        dispatch({ type: DELETE_LUNCH_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: DELETE_LUNCH_ERROR });
    }
};
