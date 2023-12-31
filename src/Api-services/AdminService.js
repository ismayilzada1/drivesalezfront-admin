import {json} from "react-router-dom";

export default class AdminService {
    constructor() {
        this.baseUrl = 'https://drivesalez.azurewebsites.net/api';
        // this.baseUrl = 'https://localhost:7261/api';
    }

    async getResource(url) {
        try {
            const result = await fetch(`${this.baseUrl}${url}`);
            if (!result.ok) {
                throw new Error(`Error: Status code ${result.status}`);
            }
            return await result.json();
        } catch (error) {
            console.error('Error in getResource:', error);
            throw error;
        }
    }

    async getResourceAuthorize(url, token) {
        try {
            const result = await fetch(`${this.baseUrl}${url}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!result.ok) {
                throw new Error(`Error: Status code ${result.status}`);
            }
            return await result.json();
        } catch (error) {
            console.error('Error in getResourceAuthorize:', error);
            throw error;
        }
    }


    async AddNewColor(data,token) {
        try {
            const response = await fetch(`${this.baseUrl}/Admin/add-new-color`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async AddNewBrand(data,token) {
        try {
            const response = await fetch(`${this.baseUrl}/Admin/add-new-make`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }


    async AddNewBodyType(data,token) {
        try {
            const response = await fetch(`${this.baseUrl}/Admin/add-new-body`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async AddNewFuelType(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-fuel`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify (data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async AddNewDrivetrainType(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-drivetrain`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify (data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async AddNewGearboxType(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-gearbox`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify (data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }


    async AddNewMarketVersion(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-market-version`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify (data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async AddNewVehicleOption(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-option`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify (data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async AddNewVehicleCondition(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-condition`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify (data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async AddNewVehicleModel(data,token) {
        console.log (data);
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-model`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify (data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async AddNewVehicleManufactureYear(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-year`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify (data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async AddNewCountry(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-country`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify (data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }


    async AddNewCity(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-city`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify (data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveBrand(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-make`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveModel(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-model`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveColor(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-color`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveCity(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-city`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveCountry(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-country`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveVehicleCondition(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-condition`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveOption(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-option`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveMarketVersion(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-market-version`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveFuelType(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-fuel`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveBodyType(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-body`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveGearboxType(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-gearbox`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveDrivetrainType(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-drivetrain`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateBodyType(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-body`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateBrand(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-make`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            console.log (response);
            if (response.ok) {
                const responseData = await response.json ();
                console.log (responseData);
                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateVehicleCondition(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-condition`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            console.log (response);
            if (response.ok) {
                const responseData = await response.json ();
                console.log (responseData);
                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateModel(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-city`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateCity(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-city`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateColor(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-color`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateAnnouncementPricing(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-subscription`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateCountry(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-country`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateOption(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-option`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateMarketVersion(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-market-version`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateGearboxType(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-gearbox`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateFuelType(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-fuel`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async UpdateDrivetrainType(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-drivetrain`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }


    async GetAllModerators(accessToken) {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");


        if (!token) {
            return null;
        }

        return await this.getResourceAuthorize(`/Admin/get-all-moderators`,token);
    }


    async AddNewModerator(data,token) {
        try {
            const response = await fetch(`${this.baseUrl}/Admin/create-moderator`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async RemoveModerator(data,token) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-moderator`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json ();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            throw error;
        }
    }


}
