import React, { useState, useEffect, useRef } from 'react';
import type { ChatbotConfig } from './types';

interface Message {
  from: 'user' | 'bot';
  text: string;
}

const MOCK_RESPONSES: string[] = [
  "Xin chào! 👋 Tôi có thể giúp gì cho bạn?",
  "Bạn có muốn tìm hiểu về sản phẩm của chúng tôi không?",
  "Chúng tôi luôn sẵn sàng hỗ trợ bạn!",
  "Cảm ơn bạn đã nhắn tin!"
];

const ChatbotBubble: React.FC<{ config: ChatbotConfig }> = ({ config }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const bubbleSize = config.bubbleSize || 60;
  const chatWidth = config.chatWidth || 350;
  const chatHeight = config.chatHeight || 400;
  const fontSize = config.fontSize || 14;
  const borderRadius = config.borderRadius || 12;
  const animationDuration = config.animationDuration || 0.3; // s

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text }]);
    setInput('');

    setTimeout(() => {
      const botMsg: Message = {
        from: 'bot',
        text: MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)]
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage(input);
  };

  const positionStyle =
    config.position === 'bottom-left'
      ? { left: 20, right: 'auto' }
      : { right: 20, left: 'auto' };

  return (
    <>
      {/* Bubble icon */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: 20,
          width: bubbleSize,
          height: bubbleSize,
          borderRadius: '50%',
          background: config.primaryColor || '#4f46e5',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: bubbleSize / 2,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s',
          transform: open ? 'scale(0.95)' : 'scale(1)',
          ...positionStyle
        }}
      >
        💬
      </div>

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: bubbleSize + 10,
            width: chatWidth,
            height: chatHeight,
            background: '#fff',
            borderRadius,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            animation: `slideUp ${animationDuration}s ease-out`,
            ...positionStyle
          }}
        >
          {/* Header */}
          <div
            style={{
              background: config.primaryColor || '#4f46e5',
              color: '#fff',
              padding: '10px 16px',
              fontWeight: 'bold',
              fontSize: fontSize + 2
            }}
          >
            ChatBot
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: 16,
              overflowY: 'auto',
              fontSize,
              lineHeight: '1.4',
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}
          >
            {messages.length === 0 && <div>{config.greeting || 'Xin chào 👋'}</div>}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                  background: msg.from === 'user' ? (config.primaryColor || '#4f46e5') : '#eee',
                  color: msg.from === 'user' ? '#fff' : '#000',
                  padding: '8px 12px',
                  borderRadius,
                  maxWidth: '75%',
                  wordWrap: 'break-word',
                  animation: `fadeIn ${animationDuration}s`
                }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{ padding: 10, borderTop: '1px solid #eee' }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập tin nhắn..."
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: borderRadius / 2,
                border: '1px solid #ccc',
                outline: 'none',
                fontSize,
              }}
            />
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default ChatbotBubble;
