import {
    addNewStart,
    addNewSuccess,
    addNewFail, updateStart, updateSuccess, updateFail, removeStart, removeSuccess, removeFail
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

export const AddNewModel = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleModel(data);

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

export const AddNewOption = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleOption(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Option");
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


export const AddVehicleManufactureYear = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleManufactureYear(data);

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


export const AddCountry = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewCountry(data);

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

export const AddCity = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewCity(data);

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

export const RemoveBrand = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.RemoveBrand(data);

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

export const RemoveModel = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.RemoveModel(data);

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

export const RemoveColor = (data) => async (dispatch) => {
    dispatch(removeStart());
    try {
        const response = await AdminService.RemoveColor(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(removeSuccess(response.data));
            return response;
        } else {
            dispatch(removeFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while processing your request'));
    }
};

export const RemoveOption = (data) => async (dispatch) => {
    dispatch(removeStart());
    try {
        const response = await AdminService.RemoveOption(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(removeSuccess(response.data));
            return response;
        } else {
            dispatch(removeFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while processing your request'));
    }
};

export const RemoveMarketVersion = (data) => async (dispatch) => {
    dispatch(removeStart());
    try {
        const response = await AdminService.RemoveMarketVersion(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(removeSuccess(response.data));
            return response;
        } else {
            dispatch(removeFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while processing your request'));
    }
};

export const RemoveFuelType = (data) => async (dispatch) => {
    dispatch(removeStart());
    try {
        const response = await AdminService.RemoveFuelType(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(removeSuccess(response.data));
            return response;
        } else {
            dispatch(removeFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while processing your request'));
    }
};

export const RemoveBodyType = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.RemoveBodyType(data);

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

export const RemoveGearboxType = (data) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.RemoveGearboxType(data);

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

export const UpdateBodyType = (data) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateBodyType(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateGearboxType = (data) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateGearboxType(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};


export const UpdateBrand = (data) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateBrand(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateModel = (data) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateModel(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateColor = (data) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateColor(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateOption = (data) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateOption(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateMarketVersion = (data) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateMarketVersion(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateFuelType = (data) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateFuelType(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};


export const UpdateDrivetrainType = (data) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateDrivetrainType(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const RemoveDrivetrainType = (data) => async (dispatch) => {
    dispatch(removeStart());
    try {
        const response = await AdminService.RemoveDrivetrainType(data);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(removeSuccess(response.data));
            return response;
        } else {
            dispatch(removeFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while processing your request'));
    }
};