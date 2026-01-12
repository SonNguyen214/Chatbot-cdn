import React, { useState, useEffect, useRef } from 'react';

interface ChatbotBubbleProps {
  config: {
    botId: string;
    position?: 'bottom-right' | 'bottom-left';
    primaryColor?: string;
    greeting?: string;
  };
}

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

const ChatbotBubble: React.FC<ChatbotBubbleProps> = ({ config }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll tự động xuống dưới khi có tin nhắn mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    // Thêm tin nhắn người dùng
    const newMsg: Message = { from: 'user', text };
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // Fake bot trả lời sau 1.2s
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
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: config.primaryColor || '#4f46e5',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: 30,
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
            bottom: 90,
            width: 350,
            height: 400,
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideUp 0.3s ease-out',
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
              fontSize: 16
            }}
          >
            ChatBot
          </div>

          {/* Messages body */}
          <div
            style={{
              flex: 1,
              padding: 16,
              overflowY: 'auto',
              fontSize: 14,
              lineHeight: '1.4',
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}
          >
            {messages.length === 0 && <div>{config.greeting || "Xin chào 👋"}</div>}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                  background: msg.from === 'user' ? '#4f46e5' : '#eee',
                  color: msg.from === 'user' ? '#fff' : '#000',
                  padding: '8px 12px',
                  borderRadius: 12,
                  maxWidth: '75%',
                  wordWrap: 'break-word',
                  animation: 'fadeIn 0.3s'
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
                borderRadius: 8,
                border: '1px solid #ccc',
                outline: 'none',
                fontSize: 14,
              }}
            />
          </div>
        </div>
      )}

      {/* Animation keyframes */}
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
