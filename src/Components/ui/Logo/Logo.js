import React from 'react';

const Logo = () => {
    return (
        <div>
            <img
                src="../assets/images/logo.svg"
                style={{
                    backgroundColor: "transparent",
                    WebkitFilter: "brightness(0%)", // Add vendor prefix for compatibility with some browsers
                    filter: "url(#colorFilter)",
                }}
                className="img-fluid"
                alt=""
            />

            <svg style={{display: "none"}}>
                <defs>
                    <filter id="colorFilter" colorInterpolationFilters="sRGB">
                        <feColorMatrix
                            type="matrix"
                            values="
                                                0   0   0   0   0.0039
                                                0   0   0   0   0.4824
                                                0   0   0   0   1
                                                0   0   0   1   0"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default Logo;