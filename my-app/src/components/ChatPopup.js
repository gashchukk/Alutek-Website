import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatPopup.css';

const ChatPopup = () => {
    const [socket, setSocket] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isManagerConnected, setIsManagerConnected] = useState(false);

    useEffect(() => {
        const newSocket = io('http://localhost:3000'); // Replace with your server URL
        setSocket(newSocket);

        // Handle incoming messages from the server
        newSocket.on('message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        // Handle 'manager-connected' event
        newSocket.on('manager-connected', () => {
            setIsManagerConnected(true);
        });

        // Handle 'server-data' event to receive data from the server
        newSocket.on('server-data', (data) => {
            console.log('Received data from server:', data);
            // Here you can update state or perform any action with the received data
        });

        return () => {
            newSocket.disconnect();
        };
    }, []);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            if (isManagerConnected) {
                socket.emit('message', message); // Send the message to the server
            } else {
                // Notify the user that the manager is not available
                setMessages((prevMessages) => [
                    ...prevMessages,
                    'Auto-response: A manager is not available at the moment. Your message has been received, and a manager will respond as soon as possible.',
                ]);
            }
            // Add the sent message to the messages list
            setMessages((prevMessages) => [...prevMessages, `You: ${message}`]);
            setMessage(''); // Clear the input field
        }
    };

    return (
        <div className="chat-popup-container">
            <button className="chat-popup-button" onClick={togglePopup}>
                Chat
            </button>
            {isOpen && (
                <div className="chat-popup">
                    <div className="chat-header">
                        <h3>Chat</h3>
                        <button className="close-button" onClick={togglePopup}>
                            &times;
                        </button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className="chat-message">
                                {msg}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={message}
                            onChange={handleMessageChange}
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatPopup;
