import React, { useState } from "react";
import { FaPhone } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa'

// Define a message type for the chatbot
interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chat: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hey! How can I help you today?' },
    { sender: 'bot', text: 'Ask me anything casual!' }
  ]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: input }]);
      setInput('');

      // Simulate bot response with different answers
      setTimeout(() => {
        let botResponse: string;
        if (input.toLowerCase().includes('joke')) {
          botResponse = 'Why don’t scientists trust atoms? Because they make up everything!';
        } else if (input.toLowerCase().includes('weather')) {
          botResponse = 'It’s sunny and bright here!';
        } else if (input.toLowerCase().includes('hobbies')) {
          botResponse = 'I love chatting and making new friends!';
        } else {
          botResponse = 'That’s interesting! Tell me more!';
        }

        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-2">

      <a href="tel:+919289586627">
        <button className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all">
          <FaPhone className="w-6 h-10" />
        </button>
      </a>
      <a href="https://wa.me/919289586627" target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Logo"
            className="w-10 h-10"
          />
        </button>
      </a>

      <button
  onClick={toggleChat}
  className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all"
>
  <FaComments className="w-8 h-10" />
</button>


      {isChatOpen && (
        <div className="absolute bottom-16 right-0 bg-white p-4 shadow-lg rounded-lg w-80 animate-fade-in-down">
          <div className="h-64 overflow-y-auto mb-2">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
              placeholder="Type your message..."
            />
            <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </div>

          <div className="mt-2 space-y-1">
            <button onClick={() => setInput('Tell me a joke!')} className="bg-gray-200 w-full py-2 rounded-lg">
              Tell me a joke!
            </button>
            <button onClick={() => setInput('How is the weather today?')} className="bg-gray-200 w-full py-2 rounded-lg">
              How is the weather today?
            </button>
            <button onClick={() => setInput('What are your hobbies?')} className="bg-gray-200 w-full py-2 rounded-lg">
              What are your hobbies?
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;


