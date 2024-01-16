import React from 'react';
import Header from '../Common/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from '../../features/Home';
import Profile from '../../features/Profile';
import Inbox from '../../features/Inbox';
import Analytics from '../../features/Analytics';
import Order from '../../features/Order';
import Settings from '../../features/Settings';

function Admin(props) {
    return (
        <React.Fragment>
            <Header />
            <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/inbox' element={<Inbox />} />
                        <Route path='/analytics' element={<Analytics />} />
                        <Route path='/order' element={<Order />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
            </main>
        </React.Fragment>
    );
}

export default Admin;