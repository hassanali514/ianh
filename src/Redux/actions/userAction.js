import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    FILE_DOWNLOAD_REQUEST,
    FILE_DOWNLOAD_SUCCESS,
    FILE_DOWNLOAD_FAIL,
    VIEW_FILE_REQUEST,
    VIEW_FILE_SUCCESS,
    VIEW_FILE_FAIL,
    CLEAR_ERRORS
} from "../constants/userConstants";

import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL
} from '../constants/adminConstant'

import axios from "axios";
import FileDownload from "js-file-download"


// Admin Login
export const userLogin = (userName, password, alert) => async (dispatch) => {

    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `http://localhost:5000/api/v1/login`,
            {
                userName,
                password
            },
            config
        );

        const token = JSON.stringify(data.token);
        localStorage.setItem('token', token);

        // console.log(data);

        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
        alert.success("Login Successfully");
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
}

// LOAD ADMIN
export const loadUser = () => async (dispatch) => {

    try {
        dispatch({ type: LOAD_USER_REQUEST });


        const value = localStorage.getItem('token');
        const token = JSON.parse(value);
        const config = { headers: { "authorization": token } };


        const { data } = await axios.get(
            `http://localhost:5000/api/v1/user/profile`,
            config
        );

        console.log(data);

        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
}

export const userRegister = (userName, origin, name, password, alert) => async (dispatch) => {
    try {


        dispatch({ type: REGISTER_USER_REQUEST });

        const value = localStorage.getItem('token');
        const token = JSON.parse(value);
        const config = { headers: { "authorization": token } };

        const { data } = await axios.post(
            `http://localhost:5000/api/v1/user/register`,
            {
                userName,
                origin,
                name,
                password
            },
            config
        );

        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
        alert.success("Registered Successfully");

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// GET ALL USER - ADMIN
export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_USERS_REQUEST });


        const value = localStorage.getItem('token');
        const token = JSON.parse(value);
        const config = { headers: { "authorization": token } };

        const { data } = await axios.get(
            `http://localhost:5000/api/v1/user/all/users`,
            config
        );

        dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
    }
};

// GET  USER DETAILS - ADMIN
// export const getUserDetails = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: USER_DETAILS_REQUEST });
//         const { data } = await axios.get(`http://localhost:5000/api/v1/admin/user/${id}`);

//         dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
//     } catch (error) {
//         dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
//     }
// };

// LOGOUT ADMIN
export const userLogout = (alert) => async (dispatch) => {

    try {

        const value = localStorage.getItem('token');
        const token = JSON.parse(value);
        const config = { headers: { "authorization": token } };


        const { data } = await axios.get(
            `http://localhost:5000/api/v1/logout`,
            config
        );

        dispatch({ type: LOGOUT_SUCCESS, payload: data });
        localStorage.clear();
        alert.success("LOGOUT SUCCESSFULY");
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
}


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

export const downloadFile = (filename,alert) => async (dispatch) => {
    try {

        // console.log(filename)
        
        const result = filename.split('public/uploads/');
        // console.log(result[1]);
        dispatch({ type: FILE_DOWNLOAD_REQUEST });


        const value = localStorage.getItem('token');
        const token = JSON.parse(value);
        const config = {
            headers: { "authorization": token },
            responseType: "blob",
        };

        const res = await axios.get(`http://localhost:5000/api/v1/user/download/${result[1]}`, config);
        FileDownload(res.data,`${result}`)

        dispatch({ type: FILE_DOWNLOAD_SUCCESS });
        alert.success("file download successfully");
    } catch (error) {
        dispatch({ type: FILE_DOWNLOAD_FAIL });
    }
};

export const viewFile = (filename,alert) => async (dispatch) => {
    try {

        
        const result = filename.split('public/uploads/');
        // console.log(result);
        
        dispatch({ type: VIEW_FILE_REQUEST });


        const value = localStorage.getItem('token');
        const token = JSON.parse(value);
        const config = {
            headers: { "authorization": token },
            responseType: "blob",
        };

        let res = await axios.get(`http://localhost:5000/api/v1/user/view/${result[1]}`, config);
        const url = URL.createObjectURL(res);
        console.log(url)

        dispatch({ type: VIEW_FILE_SUCCESS, payload: url });
        alert.success("file view successfully");
    } catch (error) {
        dispatch({ type: VIEW_FILE_FAIL });
    }
};