import React from 'react';

const Loading = () => {
    return (
        <div id="loading">
            <div id="loading-center">
                <div className="loader">
                    <div className="cube">
                        <div className="sides">
                            <div className="top"></div>
                            <div className="right"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="front"></div>
                            <div className="back"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;