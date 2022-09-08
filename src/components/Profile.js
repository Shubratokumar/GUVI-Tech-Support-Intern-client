import React from 'react';
import { Box, Container, Typography, Button, Divider, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const ProfileWrapper = styled(Box)`
    margin: 20px 0;
    padding: 20px ;
    background: #cfe8fc;
    border-radius: 10px;
    height: 80vh;
`;
const ProfileContainer = styled(Box)`
    margin-top: 20px;    
`;
const Title = styled(Typography)`
    text-align: center;
    font-weight: 600;
`;
const ProfileInfoText = styled(Typography)`
    padding: 15px;
    background-color: #ffff;
    border-radius: 10px;
    margin-bottom: 5px;
`;
const UpdateButton = styled(Button)`
    margin-top: 15px;
    outline: none;
    background: green;    
    padding: 5px 15px;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
    & a{
        text-decoration: none;
        color: white;
    }
`;

const Profile = () => {
    return (
        <section>
            <Container maxWidth="sm">
                <ProfileWrapper>
                    <Title variant="h4" gutterBottom component="div">
                        My Profile
                    </Title>
                    <Divider />
                    <ProfileContainer>
                        <ProfileInfoText> 
                            Name : Shubrato Kumar
                        </ProfileInfoText>
                        <ProfileInfoText> 
                            Email : shubrato@gmail.com
                        </ProfileInfoText>
                        <ProfileInfoText> 
                            Gender : Male
                        </ProfileInfoText>
                        <ProfileInfoText> 
                            DOB : 10/12/96
                        </ProfileInfoText>
                        <ProfileInfoText> 
                            Age : 25
                        </ProfileInfoText>
                        <ProfileInfoText> 
                            Phone : 01762813923
                        </ProfileInfoText>
                        <UpdateButton>                            
                            <Link  to="/updateProfile">
                                Update Profile
                            </Link>
                        </UpdateButton>
                    </ProfileContainer>
                </ProfileWrapper>
            </Container>
        </section>
    );
};

export default Profile;