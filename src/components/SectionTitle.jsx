import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='container mx-auto text-center lg:w-4/12 my-6'>
            <p className='text-yellow-500 mb-2'>{subHeading}</p>
            <h2 className='text-3xl border-y-4 py-4'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;