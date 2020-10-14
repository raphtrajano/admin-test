import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, SaveButton, Toolbar } from 'react-admin';
import { Box } from '@material-ui/core';

import { ProfileEditWrapper } from './Profile.style';
//ADD FORMIK TO VALIDATE THIS

const ProfileToolbar = props => (
    <ProfileEditWrapper>
        <Toolbar {...props} >
            <SaveButton
                className="save-btn"
                label="Update my profile"
                redirect="/account"
                submitOnEnter={true}
                disabled={props.pristine}
            />
        </Toolbar>
    </ProfileEditWrapper>
);

export const ProfileEdit = (props) => (
    <Edit title=" " {...props}>
        <SimpleForm toolbar={<ProfileToolbar/>}>
            <Box width="80% !important" display={{ md: 'block', lg: 'flex' }} flexWrap="wrap" margin="auto">
                <Box flex={2} mr={{ md: 0, lg: '1em' }}>
                    <Box display={{ xs: 'block', sm: 'flex' }}>
                        <Box
                            flex={1}
                            mr={{ xs: 0, sm: '0.5em' }}
                        >
                        <TextInput source="first_name" resource="first_name" fullWidth />
                        </Box>
                        <Box
                            flex={1}
                            mr={{ xs: 0, sm: '0.5em' }}
                        >
                        <TextInput source="last_name" resource="last_name" fullWidth />
                        </Box>
                    </Box>
                    <Box
                        flex={1}
                        mr={{ xs: 0, sm: '0.5em' }}
                    >
                        <TextInput source="address" resource="last_name" fullWidth />
                    </Box>
                    <Box display={{ xs: 'block', sm: 'flex' }}>
                        <Box
                            flex={1}
                            mr={{ xs: 0, sm: '0.5em' }}
                        >
                            <TextInput source="sex" resource="sex" fullWidth />
                        </Box>
                        <Box
                            flex={1}
                            mr={{ xs: 0, sm: '0.5em' }}
                        >
                            <DateInput label="Birth Date" source="birth_date" fullWidth/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </SimpleForm>
    </Edit>
);