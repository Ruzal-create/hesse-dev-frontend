import React from 'react';
import Navbar from '../components/navbar';
import ProductCard from '../components/card';


const UserDashboard = ()=> {
    return(
        <div className='h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 animate-gradient-x'>
            <Navbar className="text-white"/>
            <ProductCard/>
        </div>
    )
}

export default UserDashboard;