import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';
import { Box, Card, CardContent } from '@material-ui/core';

//ADD FORMIK TO VALIDATE THIS
export const ProfileEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <Card>
                <CardContent>
                    <Box display={{ md: 'block', lg: 'flex' }}>
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
                            <TextInput source="address" resource="last_name" fullWidth />
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
                </CardContent>
            </Card>
        </SimpleForm>
    </Edit>
);