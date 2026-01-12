import React, { useState, useEffect, useRef } from 'react';
import type { ChatbotConfig } from './types';

interface Message {
  from: 'user' | 'bot' | 'botLoading';
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
  const animationDuration = config.animationDuration || 0.3;
  const theme = config.theme || 'light';
  const bgColor = theme === 'dark' ? '#1f1f1f' : '#fff';
  const textColor = theme === 'dark' ? '#eee' : '#000';
  const bubbleBg = config.primaryColor || '#4f46e5';

  // Scroll auto
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text }]);
    setInput('');

    // thêm "botLoading" message
    setMessages(prev => [...prev, { from: 'botLoading', text: '' }]);

    // fake trả lời
    setTimeout(() => {
      setMessages(prev => {
        // remove botLoading
        const filtered = prev.filter(m => m.from !== 'botLoading');
        const botMsg: Message = {
          from: 'bot',
          text: MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)]
        };
        return [...filtered, botMsg];
      });
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
          background: bubbleBg,
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
            background: bgColor,
            color: textColor,
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
              background: bubbleBg,
              color: '#fff',
              padding: '10px 16px',
              fontWeight: 'bold',
              fontSize: fontSize + 2,
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}
          >
            {config.botAvatar && (
              <img
                src={config.botAvatar}
                alt="Bot"
                style={{ width: 30, height: 30, borderRadius: '50%' }}
              />
            )}
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
            {messages.map((msg, idx) => {
              if (msg.from === 'botLoading') {
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      background: '#eee',
                      padding: '8px 12px',
                      borderRadius,
                      maxWidth: '50%',
                      animation: `fadeIn ${animationDuration}s`
                    }}
                  >
                    {config.botAvatar && (
                      <img
                        src={config.botAvatar}
                        alt="Bot"
                        style={{ width: 24, height: 24, borderRadius: '50%' }}
                      />
                    )}
                    <div style={{ display: 'flex', gap: 4 }}>
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  style={{
                    alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                    background: msg.from === 'user' ? bubbleBg : '#eee',
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
              );
            })}
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

      {/* Animation & 3-dot loading */}
      <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .dot {
          width: 6px;
          height: 6px;
          background-color: #999;
          border-radius: 50%;
          display: inline-block;
          animation: blink 1s infinite;
        }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes blink {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default ChatbotBubble;
