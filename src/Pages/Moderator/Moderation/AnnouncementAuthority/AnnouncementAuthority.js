import React, { useEffect } from 'react';
import './AnnouncementAuthority.css';
import AnnouncementCard from '../../../../Components/ui/announcementCard';
import { Row } from 'react-bootstrap';
import LoadingPage from '../../../../Components/ui/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { GetAnnouncements, SetPageNumber } from '../../../../Store/Announcement/AnnouncementActions';
import InfiniteScroll from 'react-infinite-scroll-component';
import {setAnnouncements, setPageNumber} from '../../../../Store/Announcement/AnnouncementSlice';


const AnnouncementAuthority = () => {
    const dispatch = useDispatch();
    const { announcements, loading, error, pageNumber,hasMore } = useSelector((state) => state.announcement);

    const {AdminAccessToken}=useSelector((state)=>state.auth);

    const pageSize = 3;

    useEffect (() => {
        dispatch(setAnnouncements([]));
        dispatch(setPageNumber(1));
    }, []);

    useEffect(() => {

        dispatch(GetAnnouncements(pageNumber, pageSize,AdminAccessToken))
            .then((response) => {})
            .catch((error) => {
                console.error('Error fetching announcements:', error);
            });
    }, [dispatch, pageNumber, pageSize]);

    const fetchData = () => {
        try {
            if(hasMore){
                console.log('Fetching more data...');
                dispatch(SetPageNumber(pageNumber + 1));
            }
        } catch (error) {
            console.error('Error fetching more data:', error);
        }
    };




    // if (loading && pageNumber === 1) {
    //     return <LoadingPage />;
    // }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div id="content-page" className="content-page">
        <Row className="wrapper">
            <InfiniteScroll
                dataLength={announcements.length}
                next={fetchData}
                hasMore={hasMore}
                scrollThreshold={0.8}
            >
                <div className="container-fluid pt-3">
                    <div className="d-flex flex-row flex-wrap justify-content-between">
                        {announcements?.map((car, index) => (
                            <div className="col mb-2 ms-2 me-2" key={index}>
                                <AnnouncementCard {...car} />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </Row>

        </div>

    );
};

export default AnnouncementAuthority;