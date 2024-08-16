import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback={<div className="font-semibold text-3xl content-center text-center h-screen">... L O A D I N G ...</div>}>
                <App/>
        </Suspense>
    </React.StrictMode>
)
