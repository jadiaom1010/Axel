import { useState } from 'react';
import { motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";

const Modal = ({ open, setOpen }) => {
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const userMessage = { sender: "user", text: message };
            setChatHistory([...chatHistory, userMessage]);
            // Simulate a chatbot response
            setTimeout(() => {
                const botMessage = { sender: "bot", text: "Thank you for your message!" };
                setChatHistory((prev) => [...prev, botMessage]);
            }, 1000);
        }
        setMessage("");
    };

    return (
        <>
            <div className="sm:hidden">
                <motion.div
                    className="bg-white fixed right-4 bottom-2 sm:right-0 sm:bottom-0 z-20 flex flex-col rounded-2xl shadow-lg"
                    initial={{ scale: 1, opacity: 0, height: 0, width: 0 }}
                    animate={{
                        x: open ? -30 : 0,
                        y: open ? -30 : 0,
                        width: open ? "90%" : "0",  // Responsive width
                        maxWidth: "400px",  // Maximum width for larger screens
                        height: open ? "60%" : "0", // Responsive height
                        maxHeight: "500px",  // Maximum height
                        opacity: 1,
                    }}
                    transition={{ type: "spring", duration: 2, ease: "easeInout" }}
                >
                    <motion.div
                        className="p-4 flex flex-col"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "Tween", duration: 2 }}
                    >
                        <h5 className="text-2xl text-blue-500 font-inter font-medium tracking-tight">
                            Hello There 🖐️
                        </h5>
                        <p className="text-lg text-blue-500 font-inter font-medium tracking-tight">
                            Welcome to our website.
                        </p>
                        <span className="text-md text-blue-500 font-inter font-medium tracking-tight">
                            Ask us anything
                        </span>
                        
                        {/* Chat History */}
                        <div className="flex-grow overflow-y-auto mt-4 text-start border border-gray-300 rounded-lg p-2 bg-gray-50">
                            {chatHistory.map((chat, index) => (
                                <div key={index} className={chat.sender === "user" ? "text-blue-600" : "text-green-600"}>
                                    <b>{chat.sender === "user" ? "You: " : "Bot: "}</b>{chat.text}
                                </div>
                            ))}
                        </div>
                        
                        {/* Input Form */}
                        <div className="mt-4 text-start">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text" name="message"
                                    className="w-full p-2 rounded-lg outline-none border border-gray-300 focus:border-blue-500"
                                    placeholder="Send us a message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} />
                            </form>
                        </div>
                        
                        <Tooltip content="Close" placement="left">
                            <div className="absolute top-4 right-4 text-white cursor-pointer" onClick={() => setOpen(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#fff"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#000"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </Tooltip>
                    </motion.div>
                </motion.div>
            </div>

            <div className="sm:block hidden">
                <motion.div
                    className="bg-white fixed right-4 bottom-2 sm:right-0 sm:bottom-0 z-20 flex flex-col rounded-2xl shadow-lg"
                    initial={{ scale: 1, opacity: 0, height: 0, width: 0 }}
                    animate={{
                        x: open ? -30 : 0,
                        y: open ? -30 : 0,
                        width: open ? "80%" : "0",  // Responsive width
                        maxWidth: "350px",  // Maximum width for larger screens
                        height: open ? "50%" : "0", // Responsive height
                        maxHeight: "400px",  // Maximum height
                        opacity: 1,
                    }}
                    transition={{ type: "spring", duration: 2, ease: "easeInout" }}
                >
                    <motion.div
                        className="p-4 flex flex-col"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "Tween", duration: 2 }}
                    >
                        <h5 className="text-2xl text-blue-500 font-inter font-medium tracking-tight">
                            Hello There 🖐️
                        </h5>
                        <p className="text-lg text-blue-500 font-inter font-medium tracking-tight">
                            Welcome to our website.
                        </p>
                        <span className="text-md text-blue-500 font-inter font-medium tracking-tight">
                            Ask us anything
                        </span>
                        
                        {/* Chat History */}
                        <div className="flex-grow overflow-y-auto mt-4 text-start border border-gray-300 rounded-lg p-2 bg-gray-50">
                            {chatHistory.map((chat, index) => (
                                <div key={index} className={chat.sender === "user" ? "text-blue-600" : "text-green-600"}>
                                    <b>{chat.sender === "user" ? "You: " : "Bot: "}</b>{chat.text}
                                </div>
                            ))}
                        </div>

                        {/* Input Form */}
                        <div className="mt-4 text-start">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text" name="message"
                                    className="w-full p-2 rounded-lg outline-none border border-gray-300 focus:border-blue-500"
                                    placeholder="Send us a message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} />
                            </form>
                        </div>
                        
                        <Tooltip content="Close" placement="left">
                            <div className="absolute top-4 right-4 text-white cursor-pointer" onClick={() => setOpen(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#fff"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#000"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </Tooltip>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export default Modal;
