import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AppRoutes from './AppRoutes'

export default function App(){
    return (
        <Router>

            <div className="App">
                Temorary Page Switch
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/quote">Quote</Link> </li>
                    <li> <Link to="/history">History</Link> </li>  
                </ul>
            </div>

            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>

        </Router>
    );
}
