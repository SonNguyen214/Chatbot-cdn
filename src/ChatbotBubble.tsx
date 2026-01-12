import React, { useState, useEffect, useRef } from "react";
import type { ChatbotConfig } from "./types";

interface Message {
  from: "user" | "bot" | "botLoading";
  text: string;
}

const MOCK_RESPONSES = [
  "Xin chào! 👋 Tôi có thể giúp gì cho bạn?",
  "Bạn có muốn tìm hiểu về sản phẩm của chúng tôi không?",
  "Chúng tôi luôn sẵn sàng hỗ trợ bạn!",
  "Cảm ơn bạn đã nhắn tin!",
];

const ChatbotBubble: React.FC<{ config: ChatbotConfig }> = ({ config }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const theme = config.theme || "light";
  const bgColor = theme === "dark" ? "#1f1f1f" : "#fff";
  const textColor = theme === "dark" ? "#eee" : "#000";
  const bubbleBg = config.bubbleStyle?.background || "#4f46e5";
  const bubbleSize = (config.bubbleStyle?.width as number) || 60;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");

    // Hiển thị loading
    setMessages((prev) => [...prev, { from: "botLoading", text: "" }]);

    try {
      let botResponse = "";

      if (config.apiHost) {
        // Gọi API server
        const res = await fetch(`${config.apiHost}/messages`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            botId: config.botId,
            message: text,
          }),
        });

        const data = await res.json();
        botResponse = data.reply || "Bot không trả lời";
      } else {
        // fallback mock response
        botResponse =
          MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];
      }

      // Xóa loading + thêm bot message
      setMessages((prev) => {
        const filtered = prev.filter((m) => m.from !== "botLoading");
        return [...filtered, { from: "bot", text: botResponse }];
      });
    } catch (err) {
      console.error(err);
      setMessages((prev) => {
        const filtered = prev.filter((m) => m.from !== "botLoading");
        return [...filtered, { from: "bot", text: "Bot gặp lỗi, thử lại sau" }];
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage(input);
  };

  const positionStyle =
    config.position === "bottom-left"
      ? { left: 20, right: "auto" }
      : { right: 20, left: "auto" };

  return (
    <div className="chat-wrapper">
      {/* FAB bubble */}
      <div
        className="fab-icon"
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          width: bubbleSize,
          height: bubbleSize,
          borderRadius: config.bubbleStyle?.borderRadius || "50%",
          background: bubbleBg,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: config.bubbleStyle?.fontSize || 30,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transition: "transform 0.2s",
          transform: open ? "scale(0.95)" : "scale(1)",
          ...positionStyle,
          ...config.bubbleStyle,
        }}
      >
        {config.fabIcon || "💬"}
      </div>

      {open && (
        <div
          className="chat-window"
          style={{
            position: "fixed",
            bottom: bubbleSize + 10,
            width: config.chatWindowStyle?.width || 350,
            height: config.chatWindowStyle?.height || 400,
            background: config.chatWindowStyle?.background || bgColor,
            color: textColor,
            borderRadius: config.chatWindowStyle?.borderRadius || 12,
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            animation: `slideUp 0.3s ease-out`,
            overflowY: "auto", // vẫn scroll được
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none",
            ...positionStyle,
            ...config.chatWindowStyle,
          }}
        >
          {/* Header */}
          <div
            className="chat-header"
            style={{
              background: config.headerStyle?.background || "#4f46e5",
              color: config.headerStyle?.color || "#fff",
              padding: config.headerStyle?.padding || "10px 16px",
              fontSize: config.headerStyle?.fontSize || 16,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 8,
              ...config.headerStyle,
            }}
          >
            {config.botAvatar && (
              <img
                className="chat-avatar"
                src={config.botAvatar}
                alt="Bot"
                style={{ width: 30, height: 30, borderRadius: "50%" }}
              />
            )}
            ChatBot
          </div>

          {/* Messages */}
          <div
            className="message-wrapper"
            style={{
              flex: 1,
              padding: config.chatWindowStyle?.padding || 16,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontSize: config.chatWindowStyle?.fontSize || 14,
            }}
          >
            {messages.map((msg, idx) => {
              const isBot = msg.from === "bot" || msg.from === "botLoading";
              return (
                <div
                  className="message"
                  key={idx}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                    justifyContent:
                      msg.from === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  {isBot && config.botAvatar && (
                    <img
                      className="message-avatar"
                      src={config.botAvatar}
                      style={{ width: 24, height: 24, borderRadius: "50%" }}
                    />
                  )}
                  <div
                    className="message-content"
                    style={{
                      background: msg.from === "user" ? bubbleBg : "#eee",
                      color: msg.from === "user" ? "#fff" : "#000",
                      padding: "8px 12px",
                      borderRadius: 12,
                      maxWidth: "75%",
                      wordWrap: "break-word",
                    }}
                  >
                    {msg.from === "botLoading" ? "..." : msg.text}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer input + button */}
          <div
            className="footer"
            style={{
              display: "flex",
              gap: 6,
              padding: 10,
              borderTop: "1px solid #eee",
              ...config.footerStyle,
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập tin nhắn..."
              style={{
                flex: 1,
                padding: 8,
                borderRadius: 8,
                border: "1px solid #ccc",
                fontSize: 14,
                ...config.footerStyle,
              }}
            />
            <button
              className="send-button"
              onClick={() => sendMessage(input)}
              style={{
                padding: "8px 12px",
                background: bubbleBg,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                ...config.footerStyle,
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ChatbotBubble;
