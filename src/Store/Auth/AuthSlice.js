// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authAdmin',
    initialState: {
        admin: null,
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
            state.loading = false;
            state.isLoggedIn = true;
            state.admin = action.payload;
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
            state.user = null;
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
