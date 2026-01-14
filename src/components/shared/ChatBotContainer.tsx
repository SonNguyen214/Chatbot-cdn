import { useEffect, useRef, useState } from "react";
import type { ChatbotConfig } from "../../types";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { motion, AnimatePresence } from "framer-motion";
import TypingDots from "../../TypingDots";

const MOCK_RESPONSES = [
  "Xin chào! 👋 Tôi có thể giúp gì cho bạn?",
  "Bạn có muốn tìm hiểu về sản phẩm của chúng tôi không?",
  "Chúng tôi luôn sẵn sàng hỗ trợ bạn!",
  "Cảm ơn bạn đã nhắn tin!",
];

interface Message {
  from: "user" | "bot" | "botLoading";
  text: string;
}

interface IProps {
  config: ChatbotConfig;
}

export const ChatBotContainer = ({ config }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: config?.greeting || "Xin chào 🖐" },
  ]);
  const [input, setInput] = useState("");

  const theme = config.theme || "light";
  const bgColor = theme === "dark" ? "#1f1f1f" : "#fff";
  const textColor = theme === "dark" ? "#eee" : "#000";
  const primaryColor = config?.primaryColor || "#ffc600";
  const bubbleHeight = (config.bubbleStyle?.height as number) || 60;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");

    setMessages((prev) => [...prev, { from: "botLoading", text: "..." }]);

    try {
      let botResponse = "";

      if (config.apiHost) {
        const response = await axios.post(
          `${config.apiHost}/mipo-plugin/question`,
          { question: text }
        );
        botResponse = response.data?.data?.answer || "Bot không trả lời";
      } else {
        botResponse =
          MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];
      }

      setTimeout(() => {
        setMessages((prev) => {
          const filtered = prev.filter((m) => m.from !== "botLoading");
          return [...filtered, { from: "bot", text: botResponse }];
        });
      }, 1000);
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
    <motion.div
      className="chat-window"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        bottom: bubbleHeight + 15,
        width: config.chatWindowStyle?.width || 400,
        height: config.chatWindowStyle?.height || 500,
        background: config.chatWindowStyle?.background || bgColor,
        color: textColor,
        borderRadius: config.chatWindowStyle?.borderRadius || 12,
        boxShadow: `0 8px 24px rgba(243, 209, 56, 0.2)`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        zIndex: 999999,
        ...positionStyle,
        ...config.chatWindowStyle,
      }}
    >
      {/* Header */}
      <div
        className="chat-header"
        style={{
          background: config.headerStyle?.background || primaryColor,
          color: config.headerStyle?.color || textColor,
          padding: config.headerStyle?.padding || "10px 16px",
          fontSize: config.headerStyle?.fontSize || 18,
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
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />
        )}
        {config?.botName || "VnpostBot"}
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
        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => {
            const isBot = msg.from === "bot" || msg.from === "botLoading";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10, height: 30 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
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
                    background: msg.from === "user" ? primaryColor : "#eee",
                    color: msg.from === "user" ? textColor : "#000",
                    padding: "0px 12px",
                    borderRadius: 12,
                    maxWidth: "60%",
                    wordWrap: "break-word",
                    minHeight: "30px",
                    wordSpacing: "1.2px",
                    lineHeight: "1.4",
                    alignItems: msg.from === "botLoading" ? "center" : "normal",
                    display: msg.from === "botLoading" ? "flex" : "block",
                  }}
                >
                  {msg.from === "botLoading" ? (
                    <TypingDots />
                  ) : (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
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
            height: "25px",
            outline: `1px solid ${primaryColor}`,
            ...config.footerStyle,
          }}
        />
        <button
          className="send-button"
          onClick={() => sendMessage(input)}
          style={{
            padding: "8px 12px",
            background: primaryColor,
            color: textColor,
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            ...config.footerStyle,
          }}
        >
          ➤
        </button>
      </div>
    </motion.div>
  );
};

export default ChatBotContainer;
