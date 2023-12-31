// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authAdmin',
    initialState: {
        admin: {
            firstName:null,
            lastName:null,
            email:null,
            phoneNumbers:null,
            Role:null,
        },
        AdminAccessToken:null,
        AdminRefreshToken:null,
        isLoggedIn: false,
        loading: false,
        error: null,
    },
    reducers: {

        // Login reducers
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            console.log(action.payload);

            state.loading = false;
            state.isLoggedIn = true;

            state.admin.firstName = action.payload.result.admin.firstName;
            state.admin.lastName = action.payload.result.admin.lastName;
            state.admin.email = action.payload.result.admin.email;
            state.admin.phoneNumbers = action.payload.result.admin.phoneNumbers;
            state.admin.Role = action.payload.result.admin.userRole;

            if (action.payload.rememberMe) {
                state.AdminAccessToken = action.payload.result.token;
                state.AdminRefreshToken = action.payload.result.refreshToken;
            } else {
                sessionStorage.setItem("AdminAuthToken", action.payload.result.token);
                sessionStorage.setItem("AdminRefreshToken", action.payload.result.refreshToken);
            }
        },

        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //Logout  reducers
        logoutStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        logoutSuccess: (state) => {
            state.loading = false;
            state.isLoggedIn = false;
            state.admin.firstName = null;
            state.admin.lastName = null;
            state.admin.email = null;
            state.admin.phoneNumbers = null;
            state.admin.Role = null;

            state.AdminAccessToken=null;
            state.AdminRefreshToken=null;
            sessionStorage.removeItem("AdminAuthToken");
            sessionStorage.removeItem("AdminRefreshToken");
            console.log ("logout success finished");
        },
        logoutFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },



    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure

} = authSlice.actions;

export default authSlice.reducer;
