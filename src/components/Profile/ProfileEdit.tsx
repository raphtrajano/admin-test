import React from 'react';
import { 
    Edit, 
    SimpleForm, 
    TextInput, 
    PasswordInput,
    DateInput, 
    SaveButton, 
    Toolbar, 
    required,
    minLength,
    maxLength,
    choices,
} from 'react-admin';
import { Box } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography } from '@material-ui/core';

import { ProfileEditWrapper } from './Profile.style';
//ADD FORMIK TO VALIDATE THIS

const ProfileToolbar = props => (
        <Toolbar {...props} >
            <SaveButton
                className="save-btn"
                label="Update my profile"
                redirect="/account"
                submitOnEnter={true}
                disabled={props.pristine}
            />
        </Toolbar>
);

const confirmPassword = (value, allValues) => {
    let new_password = allValues.set_new_password;
    if (value !== new_password) {
        return 'Make sure your passwords match';
    }
}

const validateFirstName = [required(), minLength(2), maxLength(15)];
const validateLastName = [required(), minLength(2), maxLength(15)];
const validateSetNewPassword = [minLength(6)];
const validateConfirmPassword = [confirmPassword];

//ADICIONAR VERIFICACAO DAS SENHAS PARA BATEREM 

export const ProfileEdit = (props) => {
    const [state, setState] = React.useState({
        checkedB: true,
      });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    
    return (
        <ProfileEditWrapper>
            <Edit title=" " {...props}>
                <SimpleForm toolbar={<ProfileToolbar/>}>
                    <Box width="80% !important" display={{ md: 'block', lg: 'flex' }} flexWrap="wrap" margin="auto">
                        <Box flex={2} mr={{ md: 0, lg: '1em' }}>
                            <Typography
                                variant="h4"
                                component="h1"
                                align="center"
                                className="title"
                            >
                                Edit Profile
                            </Typography>
                            <Box display={{ xs: 'block', sm: 'flex' }} marginTop="15px" >
                                <Box
                                    flex={1}
                                    mr={{ xs: 0, sm: '0.5em' }}
                                >
                                <TextInput 
                                    source="first_name" 
                                    resource="first_name" 
                                    validate={validateFirstName} 
                                    fullWidth />
                                </Box>
                                <Box
                                    flex={1}
                                    mr={{ xs: 0, sm: '0.5em' }}
                                >
                                <TextInput 
                                    source="last_name" 
                                    resource="last_name" 
                                    validate={validateLastName} 
                                    fullWidth />
                                </Box>
                            </Box>
                            <Box
                                flex={1}
                                mr={{ xs: 0, sm: '0.5em' }}
                            >
                                <TextInput source="address" resource="address" fullWidth />
                            </Box>
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box
                                    flex={1}
                                    mr={{ xs: 0, sm: '0.5em' }}
                                >
                                    <TextInput source="gender" resource="gender" fullWidth />
                                </Box>
                                <Box
                                    flex={1}
                                    mr={{ xs: 0, sm: '0.5em' }}
                                >
                                    <DateInput label="Birth Date" source="birth_date" fullWidth/>
                                </Box>
                            </Box>
                            <Box
                                flex={1}
                                mr={{ xs: 0, sm: '0.5em' }}
                            >
                                <PasswordInput label="Password" source="password" fullWidth />
                            </Box>
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box
                                    flex={1}
                                    mr={{ xs: 0, sm: '0.5em' }}
                                >
                                    <PasswordInput 
                                        source="set_new_password" 
                                        validate={validateSetNewPassword}
                                        fullWidth />
                                </Box>
                                <Box
                                    flex={1}
                                    mr={{ xs: 0, sm: '0.5em' }}
                                >
                                    <PasswordInput 
                                        resource="set_new_password"
                                        source="Confirm New Passwod" 
                                        validate={validateConfirmPassword}
                                        fullWidth/>
                                </Box>
                            </Box>
                            <FormControlLabel
                                control={
                                <Switch
                                    checked={state.checkedB}
                                    onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                                }
                                label="Enable 2FA"
                            />
                        </Box>
                    </Box>
                </SimpleForm>
            </Edit> 
        </ProfileEditWrapper>
    );
};