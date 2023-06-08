import React from 'react';
import useClasses from '../../Hooks/useClasses';

const PopularClasses = () => {
    const [classes] = useClasses()
    console.log(classes)
    return (
        <div>
            <h2>Popular Classes</h2>
            <h2>Unleash Your Potential: Top-Rated Class Choices</h2>
        </div>
    );
};

export default PopularClasses;