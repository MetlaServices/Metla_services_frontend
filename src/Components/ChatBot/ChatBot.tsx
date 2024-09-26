import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input, Spin } from 'antd';
import { MessageOutlined, SendOutlined, WhatsAppOutlined, PhoneOutlined } from '@ant-design/icons';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

interface RasaResponse {
    text: string;
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        // Initial suggestions
        if (messages.length === 0) {
            const initialSuggestions: Message[] = [
                { sender: 'bot', text: 'Hi! How can I assist you today?' },
                { sender: 'bot', text: 'You can ask about the weather or say goodbye!' },
            ];
            setMessages(initialSuggestions);
        }
    }, [messages]);

    const handleSend = async (messageText: string) => {
        if (messageText.trim()) {
            const userMessage: Message = { sender: 'user', text: messageText };
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setInput('');

            setIsTyping(true);
            try {
                const response = await axios.post<RasaResponse[]>('http://localhost:3000/chat', {
                    message: messageText,
                    sender: 'user',
                });

                setTimeout(() => {
                    const rasaMessages: Message[] = response.data.map((msg) => ({ sender: 'bot', text: msg.text }));
                    setMessages((prevMessages) => [...prevMessages, ...rasaMessages]);
                    setIsTyping(false);
                }, 1000);
            } catch (error) {
                console.error('Error communicating with Rasa:', error);
                setIsTyping(false);
            }
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        handleSend(suggestion);
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center">
            <Button
                shape="circle"
                icon={<PhoneOutlined style={{ fontSize: '36px' }} />}
                size="large"
                onClick={() => window.open('tel:+919289586627')}  // Replace with your phone number
                className="bg-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 mb-2"
                style={{ width: '60px', height: '60px' }}
            />

            <a
                href="https://wa.me/9289586627"  // Replace 'your_number_here' with the actual number
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2"
            >
                <Button
                    shape="circle"
                    icon={<WhatsAppOutlined style={{ fontSize: '36px' }} />}
                    size="large"
                    className="bg-green-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ width: '60px', height: '60px' }}
                />
            </a>

            <Button
                shape="circle"
                icon={<MessageOutlined style={{ fontSize: '36px' }} />}
                size="large"
                onClick={toggleChat}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ width: '60px', height: '60px' }}
            />

            {isOpen && (
                <div className="bg-white shadow-lg rounded-lg p-4 w-80 animate__animated animate__fadeIn" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <div className="h-64 overflow-y-auto mb-2">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <div className={`inline-block p-3 rounded-lg transition-transform duration-200 ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex items-center">
                                <Spin size="small" className="mr-2" />
                                <div className="bg-gray-200 inline-block p-2 rounded-lg">Typing...</div>
                            </div>
                        )}
                    </div>

                    {/* Suggestions section */}
                    <div className="grid grid-cols-1 gap-2 mb-2">
                        <Button onClick={() => handleSuggestionClick('What\'s the weather like?')} className="bg-blue-100 hover:bg-blue-200 rounded-lg transition-all duration-200">
                            What's the weather like?
                        </Button>
                        <Button onClick={() => handleSuggestionClick('Tell me a joke!')} className="bg-blue-100 hover:bg-blue-200 rounded-lg transition-all duration-200">
                            Tell me a joke!
                        </Button>
                        <Button onClick={() => handleSuggestionClick('Goodbye!')} className="bg-blue-100 hover:bg-blue-200 rounded-lg transition-all duration-200">
                            Goodbye!
                        </Button>
                    </div>

                    <div className="flex items-center mt-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onPressEnter={() => handleSend(input)}
                            placeholder="Type your message..."
                            className="rounded-lg flex-1 mr-2 border-2 border-blue-300"
                        />
                        <Button
                            type="primary"
                            onClick={() => handleSend(input)}
                            className="rounded-lg p-2"
                            icon={<SendOutlined />}
                            style={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
