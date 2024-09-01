import { useState } from 'react';
import { motion } from 'framer-motion';

const UserMessages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center p-8 bg-yellow-300 rounded-lg shadow-xl"
    >
      <h2 className="text-4xl font-bold mb-4">Leave a Message!</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          placeholder="Write your message here..."
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </form>
      <div className="text-left">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-4 rounded-lg shadow-md mb-2"
          >
            {msg}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UserMessages;
