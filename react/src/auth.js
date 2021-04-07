import React from 'react';

const setToken = (e) => {
    if(e.origin && e.data && e.data.command === 'token-ready' && e.data.info && e.data.info.token ) {
        localStorage.setItem('jwt', e.data.info.token);
    }
    e.source.postMessage(
        {
            command: 'info',
            info: {
                complete: true,
            },
        },
        e.origin
    );
};


export const login = () => {
    console.log('Logging in');
    window.addEventListener('message', setToken, false);
    window.open('http://localhost:3000/auth/google');
    window.location = '/';
}

export const AuthContext = React.createContext();