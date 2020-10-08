import React from 'react';

import LogoImage from './ludum_logo_blue.png';

export const Logo = () => (
        <img style={appTitleStyles} src={LogoImage} />
)

const appTitleStyles = {
    display           : 'flex',
    margin            : 'auto',
    padding           : '5px 0',
    height            : '50px',
    width            : '100px',
  };