import {
    sendAnnouncementStart,
    sendAnnouncementSuccess,
    sendAnnouncementFailure,
    getAnnouncementsStart,
    getAnnouncementsFailure,
    getAnnouncementsSuccess,
    setPageNumber,
    setAnnouncements,
    setAnnouncementSuccess,
    setAnnouncementFailure,
    setAnnouncementStart,
    rejectConfirmFail,
    rejectConfirmStart,
    rejectConfirmSuccess
} from "./AnnouncementSlice"

import annonucementService from "../../Api-services/AnnouncementService"

const AnnouncementService=new annonucementService();

export const SendAnnouncement = (requestBody,token) => async (dispatch) => {
    dispatch(sendAnnouncementStart());
    try {

        const response = await AnnouncementService.SendNewAnnouncement(requestBody,token);

        if (response.status===200) {
            console.log("SUCCESFULL SEND ANNOUNCEMENT");
            dispatch(sendAnnouncementSuccess(response.data));
            return response;
        } else {
            dispatch(sendAnnouncementFailure('Email or password is invalid'));
        }
    } catch (error) {
        console.log(error);
        dispatch(sendAnnouncementFailure('An error occurred while processing your request'));
    }
};

export const GetAnnouncements = (pageNumber,PageSize,accessToken) => async (dispatch) => {
    dispatch(getAnnouncementsStart());
    try {


        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.GetAnnouncements(pageNumber,PageSize,token);
        if (response.status===200) {
            console.log("SUCCESFULL FETCH ANNOUNCEMENTS");
            const data=await response.json();
            if(data.length===0){
                return {
                    response,
                    hasMore:false
                }
            }
            dispatch(getAnnouncementsSuccess(data.reverse()));
            return {
                response,
                hasMore:true
            }
        } else {
            dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        console.log(error);
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};

export const SetPageNumber = (pageNumber) => async (dispatch) => {
    try {
        const response = await dispatch(setPageNumber(pageNumber));
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const SetAnnouncement = (id,accessToken) => async (dispatch) => {
    dispatch(setAnnouncementStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.GetAnnouncementByID(id,token);

        if (response.status===200) {
            console.log("SUCCESFULL SET ANNOUNCEMENT");
            const data=await response.json();
            dispatch(setAnnouncementSuccess(data));
            return data;
        } else {
            dispatch(setAnnouncementFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(setAnnouncementFailure('An error occurred while processing your request'));
    }
};

export const RejectAnnouncement = (data,accessToken) => async (dispatch) => {
    dispatch(rejectConfirmStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.RejectAnnouncement(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL REJECT ANNOUNCEMENT");
            dispatch(rejectConfirmSuccess(response.data));
            return response;
        } else {
            dispatch(rejectConfirmFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(rejectConfirmFail('An error occurred while processing your request'));
    }
};

export const ConfirmAnnouncement = (data,accessToken) => async (dispatch) => {
    dispatch(rejectConfirmStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.ConfirmAnnouncement(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL REJECT ANNOUNCEMENT");
            dispatch(rejectConfirmSuccess(response.data));
            return response;
        } else {
            dispatch(rejectConfirmFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(rejectConfirmFail('An error occurred while processing your request'));
    }
};