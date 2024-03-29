import React from 'react';
import { HomePage } from '../pages';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    );
}

export default App;
