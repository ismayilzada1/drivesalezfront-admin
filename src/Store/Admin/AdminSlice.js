// AdminSlice.js
import { createSlice } from '@reduxjs/toolkit';

const AdminSlice = createSlice({
    name: 'Admin',
    initialState: {
        loading: false,
        error: null,
    },
    reducers: {
        addNewStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        addNewSuccess: (state, action) => {
            state.loading = false;
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
        },
        updateFail: (state, action) => {
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


} = AdminSlice.actions;

export default AdminSlice.reducer;
