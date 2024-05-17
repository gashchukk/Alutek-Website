import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatApp.css';

const ChatApp = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

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

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      socket.emit('chat message', `Second User: ${inputValue}`);
      setInputValue('');
    }
  };

  return (
    <div className="chat-app">
      <h2>Chat App (Second User)</h2>
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
  );
};

export default ChatApp;