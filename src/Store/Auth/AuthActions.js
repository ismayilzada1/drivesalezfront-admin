import {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure
} from './AuthSlice';
import authService from '../../Api-services/AuthService';
import { useNavigate } from 'react-router-dom';


const AuthService = new authService();
export const loginStaff = (credentials,rememberMe) => async (dispatch) => {
    dispatch(loginStart());
    console.log ("loginStart");
    try {
        const response = await AuthService.LoginStaff(credentials);

        console.log (response);

        if (response.status === 200) {
            dispatch(loginSuccess({
                result: {
                    admin: response.data,
                    token: response.data.token,
                    refreshToken: response.data.refreshToken
                },
                rememberMe: rememberMe
            }));
            return response;
        } else if (response.status === 401) {
            dispatch(loginFailure('Email or password is invalid'));
            return { status: 401 };
        } else {
            dispatch(loginFailure('An error occurred while processing your request'));
        }


        return null;

    } catch (error) {
        dispatch(loginFailure('An error occurred while processing your request'));

    }
};

export const logoutStaff = (token, e) => async (dispatch) => {
    dispatch(logoutStart());
    try {

        if (!token) {
            return null
        }

        const response = await AuthService.Logout(token);

        if (response.status === 204) {
            dispatch(logoutSuccess())
            console.log('SUCCESSFUL Logout');
            return response;
        } else {
            dispatch(logoutFailure('Logout failed'));
        }
    } catch (error) {
        dispatch(logoutFailure('An error occurred while processing your request'));
    }
};

