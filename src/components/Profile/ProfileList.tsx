import * as React from "react";
import { FC } from 'react';
import { EditButton, List, ListProps, useListContext } from 'react-admin';
// import inflection from 'inflection';
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@material-ui/core';

import { ProfileWrapper } from './Profile.style';

const CategoryGrid = props => {
    const { data, ids, loaded } = useListContext();
    return loaded ? (
        <ProfileWrapper>
            <Card className="card">
                <CardContent className="full-width">
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        Name: {data[0].first_name}
                        {data[0].last_name}
                    </Typography>
                </CardContent>
                <CardContent className="full-width">
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        Address: {data[0].address} 
                    </Typography>
                </CardContent>
                <CardContent className="full-width">
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        Sex: {data[0].sex} 
                    </Typography>
                </CardContent>
                <CardContent className="full-width">
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        Birth Date: {data[0].birth_date} 
                    </Typography>
                </CardContent>
                    <CardActions>
                        <EditButton
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