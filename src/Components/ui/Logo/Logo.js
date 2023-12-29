import React from 'react';

const Logo = ({ size }) => {
    const logoStyle = {
        backgroundColor: 'transparent',
        filter: 'url(#colorFilter)',
        width: size,
        height: 'auto',
    };

    return (
        <a href={'https://drivesalez.site'} className={'d-flex justify-content-center align-items-center'} target={"_blank"}>
            <img
                src="/assets/images/logo.svg"
                style={logoStyle}
                className="img-fluid"
                alt=""
            />

            <svg style={{ display: 'none' }}>
                <defs>
                    <filter id="colorFilter" colorInterpolationFilters="sRGB">
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0.5176 0 0 0 0 1 0 0 0 1 0"
                        />
                    </filter>
                </defs>
            </svg>
        </a>
    );
};

export default Logo;
