import React, { useState, useEffect } from "react";
import { startConnection, addMessageListener, sendMessage } from "./signalrService";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState("User1");
    const [message, setMessage] = useState("");

    useEffect(() => {
        startConnection();
        addMessageListener((user, message) => {
            setMessages((prev) => [...prev, { user, text: message }]);
        });
    }, []);

    const handleSend = () => {
        if (message.trim()) {
            sendMessage(user, message);
            setMessage("");
        }
    };

    return (
        <div>
            <h2>SignalR Chat</h2>
            <div>
                <input value={user} onChange={(e) => setUser(e.target.value)} placeholder="Your name" />
            </div>
            <div>
                <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
                <button onClick={handleSend}>Send</button>
            </div>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}><strong>{msg.user}:</strong> {msg.text}</p>
                ))}
            </div>
        </div>
    );
};

export default Chat;
