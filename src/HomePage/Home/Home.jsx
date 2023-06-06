import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {user}
        </div>
    );
};

export default Home;