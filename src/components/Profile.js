import React from 'react';
import { Box, Container, Typography,Divider, styled } from '@mui/material';

const ProfileInfo = styled(Box)`
    margin: 20px 0;
    padding: 20px ;
    background: #cfe8fc;
    border-radius: 10px;
    height: 80vh;
`;
const Title = styled(Typography)`
    text-align: center

`

const Profile = () => {
    return (
        <section>
            <Container maxWidth="sm">
                <ProfileInfo>
                    <Title variant="h4" gutterBottom component="div">
                        My Profile
                    </Title>
                    <Divider />

                </ProfileInfo>
            </Container>
        </section>
    );
};

export default Profile;