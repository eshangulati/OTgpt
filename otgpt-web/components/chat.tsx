'use client';
import React, { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const initialMessage = "Hello! I'm your Occupational Therapist AI. How can I assist you today?";
    typeMessage(initialMessage, 'bot');
  }, []);

  const typeMessage = (message, sender) => {
    let i = 0;
    const speed = 50; // Typing speed in milliseconds
    let typedText = '';

    const typingInterval = setInterval(() => {
      if (i < message.length) {
        typedText += message.charAt(i);
        addMessage(typedText, sender, true);
        i++;
      } else {
        clearInterval(typingInterval);
        addMessage(message, sender, false);
      }
    }, speed);
  };

  const addMessage = (text, sender, isTyping) => {
    const newMessage = {
      id: messages.length + 1,
      text: text,
      sender: sender,
      isTyping: isTyping
    };

    setMessages(prevMessages => {
      const filteredMessages = prevMessages.filter(m => m.id !== newMessage.id);
      return [...filteredMessages, newMessage];
    });
  };


  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        sender: 'user'
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };
  const renderMessage = (message) => {
    if (message.sender === 'user') {
      return renderUserMessage(message);
    } else {
      return renderBotMessage(message);
    }
  };

  const renderUserMessage = (message) => (
    <div key={message.id} className="flex justify-end items-center gap-2 my-2">
      <div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">
        {message.text}
      </div>
      <Avatar className="w-8 h-8 mr-48">
        <AvatarImage src="/user-avatar.jpg" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </div>
  );

  const renderBotMessage = (message) => (
    <div key={message.id} className="flex justify-start items-center gap-2 my-2">
      <Avatar className="w-8 h-8 ml-48">
        <AvatarImage src="/bot-avatar.jpg" />
        <AvatarFallback>OT</AvatarFallback>
      </Avatar>
      <div className="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
        {message.text}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <span className="font-bold text-xl">Chat</span>
      </header>
      <div className="flex-1 overflow-auto p-6">
        {messages.map((message) => renderMessage(message))}
      </div>
      <div className="bg-background border-t px-6 py-4 flex items-center">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 rounded-xl border-neutral-400 shadow-sm p-3 resize-none"
          rows={1}
          value={input}
          onChange={handleInputChange}
        />
        <Button type="submit" size="icon" className="ml-2" onClick={handleSendMessage} disabled={!input.trim()}>
          <ArrowUpIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
}

function ArrowUpIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function BotIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 011 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
