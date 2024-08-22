import React, { useContext, useState, useEffect } from 'react';
import io from 'socket.io-client';
import AuthContext from '../context/AuthContext';

const socket = io('http://localhost:5000');

const Chat = ({ recipientId }) => {
    const { user } = useContext(AuthContext);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.emit('join', recipientId);
        socket.on('message', (msg) => setMessages([...messages, msg]));

        return () => socket.disconnect();
    }, [messages, recipientId]);

    const sendMessage = () => {
        socket.emit('chatMessage', { sender: user._id, receiver: recipientId, message });
        setMessages([...messages, { sender: user._id, message }]);
        setMessage('');
    };

    return (
        <div>
            <h2>Chat</h2>
            <div>
                {messages.map((msg, idx) => (
                    <p key={idx}><strong>{msg.sender === user._id ? 'Me' : 'Them'}:</strong> {msg.message}</p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
