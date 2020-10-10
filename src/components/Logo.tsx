import React from 'react';

interface Props {
        imgURL: string;
}

export const Logo = (props: Props) => (
        <img style={appTitleStyles} src={props.imgURL} />
)

const appTitleStyles = {
    display           : 'flex',
    margin            : 'auto',
    padding           : '5px 0',
    height            : '50px',
    width            : '50px',
  };