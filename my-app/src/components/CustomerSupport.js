import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './CustomerSupport.css';

const CustomerSupport = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const newSocket = io('http://localhost:8080');
        setSocket(newSocket);

        newSocket.on('chat message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            newSocket.disconnect();
        };
    }, []);

    const sendMessage = async () => {
        if (inputValue.trim() !== '') {
            const message = `Client: ${inputValue}`;

            // Emit the message to the socket server
            socket.emit('chat message', message);

            // Send a POST request to the server
            try {
                const response = await fetch('http://localhost:8080/messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Clear the input after message sent
                setInputValue('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`customer-support ${isOpen ? 'open' : ''}`}>
            <div className="popup-header">
                <h2>Customer Support</h2>
                <button className="toggle-button" onClick={togglePopup}>
                    {isOpen ? 'Close' : 'Chat'}
                </button>
            </div>
            {isOpen && (
                <div className="popup-content">
                    <div className="message-container">
                        {messages.map((msg, index) => (
                            <div key={index} className="message">
                                {msg}
                            </div>
                        ))}
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerSupport;
