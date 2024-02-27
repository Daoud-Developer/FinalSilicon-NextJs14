"use client"
import React from 'react';

import Tilt from 'react-parallax-tilt';

const ParallaxTilt = ({ children, style }) => {
    return (
        <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} style={style}>
            {children}
        </Tilt>
    );
};

export default ParallaxTilt;
