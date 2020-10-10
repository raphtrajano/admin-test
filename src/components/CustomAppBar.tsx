import * as React from "react";
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Logo } from './Logo';

import atom from '../assets/ludum_round.png';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
    },
    title: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});

export const CustomAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar userMenu={<span>Welcome, user!</span>} className={classes.root} {...props}>
            <Logo imgURL = {atom} />
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            >
            Ludum boards - Free</Typography>
            <span className={classes.spacer} />
        </AppBar>
    );
};