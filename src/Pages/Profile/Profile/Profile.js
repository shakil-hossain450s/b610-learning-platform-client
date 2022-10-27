import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Profile = () => {
    const { pdf } = useContext(AuthContext);
    console.log(pdf);
    return (
        <div>
            <h2>This is Your Personal Profile</h2>
        </div>
    );
};

export default Profile;