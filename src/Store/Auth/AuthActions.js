import {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure
} from './AuthSlice';
import authService from '../../Api-services/AuthService';


const AuthService = new authService();
export const login = (credentials) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await AuthService.Login(credentials);


        if (response.status===200) {
            console.log("SUCCESFULL LOGIN");
            dispatch(loginSuccess(response.data));
            return response;
        } else {
            dispatch(loginFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(loginFailure('An error occurred while processing your request'));
    }
};

export const logout = (token) => async (dispatch) => {
    dispatch(logoutStart());
    try {
        const response = await AuthService.Logout(token);


        if (response.status === 204) {
            dispatch(logoutSuccess())
            console.log('SUCCESSFUL Logout');
            return response;
        } else {
            dispatch(logoutFailure('Logout failed'));
        }
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(logoutFailure('An error occurred while processing your request'));
    }
};

