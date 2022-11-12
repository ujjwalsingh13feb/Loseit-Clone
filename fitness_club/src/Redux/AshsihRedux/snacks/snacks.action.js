import axios from "axios";
import {
    DELETE_SNACKS_ERROR,
    DELETE_SNACKS_LOADING,
    DELETE_SNACKS_SUCCESS,
    GET_SNACKS_ERROR,
    GET_SNACKS_LOADING,
    GET_SNACKS_SUCCESS,
    POST_SNACKS_ERROR,
    POST_SNACKS_LOADING,
    POST_SNACKS_SUCCESS,
} from "./snacks.types";

// 1. Get snacks
export const getsnacks = () => async (dispatch) => {
    dispatch({ type: GET_SNACKS_LOADING });
    try {
        let response = await axios.get(`http://localhost:3801/snacks`); // FOR MONGODB
        let data = response.data;
        dispatch({ type: GET_SNACKS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_SNACKS_ERROR });
    }
};

//2. Post snacks
export const postsnacks = (payload) => async (dispatch) => {
    // console.log('payload:', payload)
    dispatch({ type: POST_SNACKS_LOADING });
    try {
        let response = await axios.post(`http://localhost:3801/snacks`, payload); // FOR MONGODB
        let data = response.data;
        dispatch({ type: POST_SNACKS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: POST_SNACKS_ERROR });
    }
};


//3. Delete snacks
export const deletesnacks = (payload) => async (dispatch) => {
    console.log('payload of Delete:', payload)
    dispatch({ type: DELETE_SNACKS_LOADING });
    try {
        let response = await axios.delete(
            `http://localhost:3801/snacks/${payload.id}`
        );
        dispatch({ type: DELETE_SNACKS_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: DELETE_SNACKS_ERROR });
    }
};
