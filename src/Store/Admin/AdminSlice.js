// AdminSlice.js
import { createSlice } from '@reduxjs/toolkit';

const AdminSlice = createSlice({
    name: 'Admin',
    initialState: {
        loading: false,
        error: null,
        users:null
    },
    reducers: {
        addNewStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        addNewSuccess: (state, action) => {
            state.loading = false;
            state.error=null;
        },
        addNewFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        removeStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        removeSuccess: (state, action) => {
            state.loading = false;
            state.error=null;
            },
        removeFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        updateSuccess: (state, action) => {
            state.loading = false;
            state.error=null;
        },
        updateFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getAllUsersStart: (state,action)=>{
            state.loading = true;
            state.error = null;
        },
        getAllUsersSucess: (state,action)=>{
            state.loading = false;
            state.error=null;
            state.users=action.payload;
        },
        getAllUsersFail: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        banUserStart: (state,action)=>{
            state.loading = true;
            state.error = null;
        },
        banUserSucess: (state,action)=>{
            state.loading = false;
            state.error=null;
        },
        banUserFail: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        unbanUserStart: (state,action)=>{
            state.loading = true;
            state.error = null;
        },
        unbanUserSucess: (state,action)=>{
            state.loading = false;
            state.error=null;
        },
        unbanUserFail: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },


    },
});

export const {
    addNewStart,
    addNewSuccess,
    addNewFail,
    removeStart,
    removeFail,
    removeSuccess,
    updateFail,
    updateStart,
    updateSuccess,
    getAllUsersStart,
    getAllUsersSucess,
    getAllUsersFail,
        banUserStart,
        banUserSucess,
        banUserFail,
    unbanUserStart,
    unbanUserSucess,
    unbanUserFail


} = AdminSlice.actions;

export default AdminSlice.reducer;
