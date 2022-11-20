import React, { useContext } from 'react';
import { setAuthToken } from '../api/auth';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const handleGoogleSignIn = () =>{
         googleSignIn()
        .then((result) =>{
            const user = result.user;
            console.log('user logged in successfully')
         setAuthToken(user)
        })
       
    }
    return (
        <div>
            <p className='text-center'><small >Social login</small></p>
            <p className='text-center'>
                <button className='btn btn-ghost' onClick={handleGoogleSignIn}>Google</button>
            </p>

        </div>
    );
};

export default SocialLogin;