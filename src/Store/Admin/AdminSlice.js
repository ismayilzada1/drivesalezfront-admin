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

    },
});

export const {
    addNewStart,
    addNewSuccess,
    addNewFail

} = AdminSlice.actions;

export default AdminSlice.reducer;
