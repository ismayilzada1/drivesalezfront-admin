export default class AnnouncementService {
    // _baseUrl = 'https://drivesalez.azurewebsites.net/api';
    // _baseUrl = 'https://localhost:7261/api';
    _baseUrl = 'https://217.64.21.237:7261/api';

    async getResource(url) {
        try {
            const result = await fetch(`${this._baseUrl}${url}`);
            if (!result.ok) {
                throw new Error(`Error fetching ${url}: Status code ${result.status}`);
            }
            return await result.json();
        } catch (error) {
            console.error(`Error in getResource for ${url}:`, error.message);
            throw error;
        }
    }

    async SendNewAnnouncement(data,token) {
        try {
            const response = await fetch(`${this._baseUrl}/Announcement/create-announcement`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log(response);


            return response;
        } catch (error) {
            console.error('Error in SendNewAnnouncement:', error.message);
            throw error;
        }
    }

    async GetAnnouncements(pageNumber = 1, pageSize = 10,token){
        try {
            const response = await fetch(`${this._baseUrl}/Announcement/get-all-waiting-announcements?PageNumber=${pageNumber}&PageSize=${pageSize}&announcementState=2`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response;
        } catch (error) {
            console.error('Error in SendNewAnnouncement:', error.message);
            throw error;
        }
    }


    async GetAnnouncementByID(id,token){
        try {

            const response = await fetch(`${this._baseUrl}/Announcement/get-announcement-by-id/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            console.log ("resp");
            console.log (response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }


            return response;
        } catch (error) {
            console.error('Error in SendNewAnnouncement:', error.message);
            throw error;
        }
    }

    async RejectAnnouncement(data,token) {
        try {
            const response = await fetch(`${this._baseUrl}/Moderator/make-announcement-inactive/${data}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log(response);


            return response;
        } catch (error) {
            console.error('Error in SendNewAnnouncement:', error.message);
            throw error;
        }
    }

    async ConfirmAnnouncement(data,token) {
        try {
            const response = await fetch(`${this._baseUrl}/Moderator/confirm-announcement/${data}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log(response);


            return response;
        } catch (error) {
            console.error('Error in SendNewAnnouncement:', error.message);
            throw error;
        }
    }
}
