import React, { useState } from 'react';

const WasteChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate a response from admin/support
      setTimeout(() => {
        setMessages(prev => [...prev, { text: 'Thank you for your message! Our team will assist you soon.', sender: 'admin' }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-400">WasteChat</h2>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col h-[calc(100vh-200px)]">
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-green-200' : 'bg-gray-200'}`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 rounded-l bg-gray-100 text-black"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteChat;