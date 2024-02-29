// announcementSlice.js
import { createSlice } from '@reduxjs/toolkit';

const announcementSlice = createSlice({
    name: 'announcement',
    initialState: {
        loading: false,
        error: null,
        announcement:null,
        announcements: [],
        filterParams:null,
        pageNumber: 1,
        pageSize: 3,
        hasMore: true,
        formDataSendAnnouncement:
            {
                model: '',
                bodyType: '',
                fuelType: '',
                driveTrainType:'',
                gearboxType:'',
                color:'',
                marketVersion:'',
                options:[],
                conditions:[],
                manufactureYear:'',
                city:'',
                mileage:'',
                distanceUnit:'',
                ownerQuantity:'',
                engineVolume:'',
                horsePower:'',
                seatCount:'',
                vinCode:'',
                price:'',
                priceCurrency:'',
                credit:false,
                barter:false,
                brandNew:false,
                description:'',
                isPremium:false
            },
    },
    reducers: {
        //Send Announcement (Create Announcement)
        sendAnnouncementStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        sendAnnouncementSuccess: (state,action) => {
            state.loading = false;
            state.error=null;
            state.formData = action.payload;
        },
        sendAnnouncementFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getAnnouncementsStart(state) {
            state.loading = true;
            state.error=null;
        },
        getAnnouncementsSuccess(state, action) {
            const newAnnouncements = action.payload;

            state.announcements = [
                ...state.announcements,
                ...newAnnouncements.filter(
                    (newAnnouncement) =>
                        !state.announcements.some(
                            (existingAnnouncement) =>
                                existingAnnouncement.id === newAnnouncement.id
                        )
                ),
            ];

            state.loading = false;
            state.error = null;
            state.hasMore = newAnnouncements.length > 0;
        },
        getAnnouncementsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },


        setAnnouncements(state,action){
            state.announcements=action.payload;
            state.error=null;
        },

        // Pagination
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
            state.error=null;
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
            state.error=null;
        },

        setAnnouncementStart(state){
            state.loading=true;
            state.error=null;
        },

        setAnnouncementSuccess:(state,action)=>{
            state.announcement=action.payload;
            state.loading=false;
            state.error = null;
        },

        setAnnouncementFailure(state,action){
            state.loading=false;
            state.error=action.payload;
        },

        // Reject Confirm
        rejectConfirmStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        rejectConfirmSuccess: (state, action) => {
            state.loading = false;
            state.error=null;
        },
        rejectConfirmFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


    },
});

export const {
    sendAnnouncementStart,
    sendAnnouncementSuccess,
    sendAnnouncementFailure,
    getAnnouncementsStart,
    getAnnouncementsSuccess,
    getAnnouncementsFailure,
    setPageNumber,
    setAnnouncements,
    setAnnouncementStart,
    setAnnouncementSuccess,
    setAnnouncementFailure,
    rejectConfirmFail,
    rejectConfirmStart,
    rejectConfirmSuccess
} = announcementSlice.actions;

export default announcementSlice.reducer;
