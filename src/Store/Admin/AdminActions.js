import {
    addNewStart,
    addNewSuccess,
    addNewFail
} from './AdminSlice';


import adminService from '../../Api-services/AdminService';


const AdminService = new adminService();
export const AddNewColor = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewColor(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Color");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewBrand = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewBrand(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewBodyType = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewBodyType(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewFuelType = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewFuelType(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Fuel Type");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewDrivetrainType = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewDrivetrainType(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Drivetrain Type");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewGearboxType = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewGearboxType(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Drivetrain Type");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewMarketVersion = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewMarketVersion(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Market Version");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddVehicleOption = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleOption(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Market Version");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const addVehicleCondition = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleCondition(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Market Version");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddVehicleModel = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleModel(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Market Version");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

