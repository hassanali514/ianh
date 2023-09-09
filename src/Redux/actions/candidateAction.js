import {
    NEW_CANDIDATE_REQUEST,
    NEW_CANDIDATE_SUCCESS,
    NEW_CANDIDATE_FAIL,
    ALL_CANDIDATES_REQUEST,
    ALL_CANDIDATES_SUCCESS,
    ALL_CANDIDATES_FAIL,
    CANDIDATE_DETAILS_REQUEST,
    CANDIDATE_DETAILS_SUCCESS,
    CANDIDATE_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/candidateConstant";
import axios from "axios";
// Create Product
export const createCandidate = (candidateData) => async (dispatch) => {
    try {

        // for (const [key, value] of candidateData.entries()) {
        //     console.log(key, value);
        // }

        dispatch({ type: NEW_CANDIDATE_REQUEST });

        const value = localStorage.getItem('token');
        const token = JSON.parse(value);

        const config = {
            headers: {
                "authorization": token
            },
        };


        const { data } =
            await axios.post(
                `http://localhost:5000/api/v1//user/new/candidate`,
                candidateData,
                config
            );

        dispatch({
            type: NEW_CANDIDATE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: NEW_CANDIDATE_FAIL,
            payload: error.response.data.message,
        });
    }
};

// GET ALL CANDIDATES
export const getAllCandidates = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_CANDIDATES_REQUEST });


        const value = localStorage.getItem('token');
        const token = JSON.parse(value);
        const config = { headers: { "authorization": token } };

        const { data } = await axios.get(
            `http://localhost:5000/api/v1/user/candidates`,
            config
        );

        dispatch({ type: ALL_CANDIDATES_SUCCESS, payload: data.candidates });
    } catch (error) {
        dispatch({ type: ALL_CANDIDATES_FAIL, payload: error.response.data.message });
    }
}

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

export const getCandidateDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CANDIDATE_DETAILS_REQUEST });

        const value = localStorage.getItem('token');
        const token = JSON.parse(value);
        const config = { headers: { "authorization": token } };

        const { data } = await axios.get(`http://localhost:5000/api/v1/user/candidate/${id}`,config);
        // console.log(data);

          dispatch({
            type: CANDIDATE_DETAILS_SUCCESS,
            payload: data.candidate,
          });
    } catch (error) {
          dispatch({
            type: CANDIDATE_DETAILS_FAIL,
            payload: error.response.data.message,
          });
    }
};