import React from 'react';

const LogoFull = ({ width }) => {
    return (
        <div className={'mb-3'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
                src="../assets/images/logo-full.svg"
                style={{
                    backgroundColor: "transparent",
                    filter: "url(#colorFilter)",
                    width: width || "100%",
                    height: "auto",
                }}
                className="img-fluid"
                alt=""
            />

            <svg style={{ display: "none" }}>
                <defs>
                    <filter id="colorFilter" colorInterpolationFilters="sRGB">
                        <feColorMatrix
                            type="matrix"
                            values="
                                1   0   0   0   1
                                0   1   0   0   1
                                0   0   1   0   1
                                0   0   0   1   0"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default LogoFull;
