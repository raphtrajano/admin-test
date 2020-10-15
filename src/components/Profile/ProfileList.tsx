import * as React from "react";
import { FC } from 'react';
import { EditButton, List, ListProps, useListContext } from 'react-admin';
// import inflection from 'inflection';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
} from '@material-ui/core';

import { ProfileWrapper } from './Profile.style';

const CategoryGrid = props => {
    const { data, ids, loaded } = useListContext();
    return loaded ? (
        <ProfileWrapper>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                className="my-profile"
            >
                My Profile
            </Typography>
            <Card className="card">
                <CardContent className="full-width">
                    <h3 className="field">
                        Name: 
                    </h3>
                    <Typography
                        variant="h5"
                        component="h3"
                        align="center"
                    >
                        {data[0].first_name}
                        &nbsp;
                        {data[0].last_name}
                    </Typography>
                </CardContent>
                <CardContent className="full-width">
                    <h3 className="field">
                        Address: 
                    </h3>
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        {data[0].address} 
                    </Typography>
                </CardContent>
                <CardContent className="full-width">
                    <h3 className="field">
                        Sex: 
                    </h3>
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        {data[0].sex} 
                    </Typography>
                </CardContent>
                <CardContent className="full-width">
                    <h3 className="field">
                        Birth Date: 
                    </h3>
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        {data[0].birth_date} 
                    </Typography>
                </CardContent>
                <CardContent className="full-width">
                    <h3 className="field">
                        Latest Invoice Amount: 
                    </h3>
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        {data[0].latest_amount}$
                    </Typography>
                </CardContent>
                <CardContent className="full-width">
                    <h3 className="field">
                        Current plan: 
                    </h3>
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        {data[0].plan_type} 
                    </Typography>
                </CardContent>
                <CardContent className="full-width">
                    <h3 className="field">
                        Billing: 
                    </h3>
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        {data[0].billing}
                    </Typography>
                </CardContent>
                    <CardActions>
                        <EditButton
                            className="edit-btn"
                            basePath="/account/0"
                        />
                        </CardActions>
                    </Card>
        </ProfileWrapper>
    ) : <div>Loading...</div>;
};

export const ProfileList = props => (
    <List
        {...props}
        title=' '
        sort={{ field: 'name', order: 'ASC' }}
        perPage={20}
        pagination={false}
        component="div"
        actions={false}
    >
        <CategoryGrid {...props}/>
    </List>
);