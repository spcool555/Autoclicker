import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const useClickToken = () => {
    const [token, setToken] = useState(null);
    const [clickCount, setClickCount] = useState(0);
    const [message, setMessage] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        // Check for an existing signInToken to determine if the user is signed in
        const signInToken = localStorage.getItem('token');
        setIsSignedIn(!!signInToken);

        // Check for an existing click token in local storage
        const existingToken = localStorage.getItem('clickToken');
        if (existingToken) {
            setToken(existingToken);
        } else {
            // Fetch a new click token from the backend if not signed in
            if (!signInToken) {
                fetch('http://localhost:8081/public/token')
                    .then(response => response.text())
                    .then(newToken => {
                        localStorage.setItem('clickToken', newToken);
                        setToken(newToken);
                    })
                    .catch(error => console.error('Error fetching token:', error));
            }
        }
    }, []);

    const handleClick = () => {
        if (!token && !isSignedIn) {
            console.error('No token found.');
            return;
        }

        // Adjust the API endpoint or headers based on whether the user is signed in
        const apiURL = isSignedIn ? '/public/tokenss' : '/public/tokens'; // Example API endpoints
        const headers = isSignedIn ? { 'Authorization': `Bearer ${localStorage.getItem('token')}` } : { 'Content-Type': 'text/plain' };

        fetch(`http://localhost:8081${apiURL}`, {
            method: 'POST',
            headers: headers,
            body: isSignedIn ? undefined : token, // Send the clickToken if not signed in
        })
        .then(response => response.json())
        .then(data => {
            setClickCount(data.clickCount);
            setMessage(data.message);

            // Handle signed-in state differently
            if (!isSignedIn && data.message === "Free clicks exhausted. Sign-in required.") {
                Swal.fire({
                    title: 'Attention!',
                    text: 'Your free clicks have been exhausted. Please sign in to continue.',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
            }
        })
        .catch(error => console.error('Error handling click:', error));
    };

    return { handleClick, clickCount, message };
};

export default useClickToken;
