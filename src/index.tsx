import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatIcon from './assets/chat.svg';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img className="h-12 w-12" src={ChatIcon} alt="ChitChat Logo" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-gray-500">You have a new message!</p>
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
