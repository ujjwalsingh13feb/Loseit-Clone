import axios from "axios";
import {
    DELETE_DINNER_ERROR,
    DELETE_DINNER_LOADING,
    DELETE_DINNER_SUCCESS,
    GET_DINNER_ERROR,
    GET_DINNER_LOADING,
    GET_DINNER_SUCCESS,
    POST_DINNER_ERROR,
    POST_DINNER_LOADING,
    POST_DINNER_SUCCESS,
} from "./dinner.types";

// 1. Get dinner
export const getdinner = () => async (dispatch) => {
    dispatch({ type: GET_DINNER_LOADING });
    try {
        let response = await axios.get(`https://fitness-club-server.onrender.com/dinner`); // FOR MONGODB
        let data = response.data;
        dispatch({ type: GET_DINNER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_DINNER_ERROR });
    }
};

//2. Post dinner
export const postdinner = (payload) => async (dispatch) => {
    console.log('payload:', payload)
    dispatch({ type: POST_DINNER_LOADING });
    try {
        let response = await axios.post(`https://fitness-club-server.onrender.com/dinner`, payload); // FOR MONGODB
        let data = response.data;
        dispatch({ type: POST_DINNER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: POST_DINNER_ERROR });
    }
};


//3. Delete dinner
export const deletedinner = (payload) => async (dispatch) => {
    console.log('payload of Delete:', payload)
    dispatch({ type: DELETE_DINNER_LOADING });
    try {
        let response = await axios.delete(
            `https://fitness-club-server.onrender.com/dinner/${payload.id}`
        );
        dispatch({ type: DELETE_DINNER_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: DELETE_DINNER_ERROR });
    }
};
