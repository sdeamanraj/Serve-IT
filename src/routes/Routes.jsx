import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Send from '../components/Send';
import Receive from '../components/Receive';

function Routes() {
    return (
        <Switch>
            <Route path="/" element={<HomePage />} />
            <Route path="/send" element={<Send />} />
            <Route path="/receive" element={<Receive />} />
        </Switch>
    );
}

export default Routes;
