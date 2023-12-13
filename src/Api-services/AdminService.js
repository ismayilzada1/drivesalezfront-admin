import {json} from "react-router-dom";

export default class AdminService {
    constructor() {
        this.baseUrl = 'https://localhost:7261/api';
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


    async AddNewColor(data) {
        try {
            const response = await fetch(`${this.baseUrl}/Admin/add-new-color`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

    async AddNewBrand(data) {
        try {
            const response = await fetch(`${this.baseUrl}/Admin/add-new-make`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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


    async AddNewBodyType(data) {
        try {
            const response = await fetch(`${this.baseUrl}/Admin/add-new-body`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

    async AddNewFuelType(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-fuel`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

    async AddNewDrivetrainType(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-drivetrain`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

    async AddNewGearboxType(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-gearbox`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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


    async AddNewMarketVersion(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-market-version`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

    async AddNewVehicleOption(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-option`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

    async AddNewVehicleCondition(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-condition`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

    async AddNewVehicleModel(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-model`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

    async AddNewVehicleManufactureYear(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-year`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

    async AddNewCountry(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-country`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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


    async AddNewCity(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/add-new-city`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

    async RemoveBrand(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-make/${data}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
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

    async RemoveBodyType(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-body/${data}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
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

    async RemoveGearboxType(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-gearbox/${data}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
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

    async RemoveDrivetrainType(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/delete-drivetrain/${data}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
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

    async UpdateBodyType(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-body/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(data.bodyType)
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

    async UpdateBrand(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-make/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(data.makeName)
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

    async UpdateGearboxType(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-gearbox/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(data.gearboxType)
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

    async UpdateDrivetrainType(data) {
        try {
            const response = await fetch (`${this.baseUrl}/Admin/update-drivetrain/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(data.bodyType)
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
