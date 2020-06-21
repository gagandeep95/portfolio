import React from 'react';
import {Figure } from 'react-bootstrap';
import dp from '../assets/profile.png';
const ProfilePic = (props) => (
        <>
            <Figure className="">
                <Figure.Image width={400} height={700} alt="Profile Image" src={dp} />
            </Figure>
       </>
);

export default ProfilePic;