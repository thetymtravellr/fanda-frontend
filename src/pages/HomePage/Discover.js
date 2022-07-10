import React from 'react';
import Card from '../../components/Card';

const Discover = () => {
    return (
        <section className='my-8'>
            <h1 className='text-3xl mb-4'>Discover</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </section>
    );
};

export default Discover;