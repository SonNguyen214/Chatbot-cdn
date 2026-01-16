import { useEffect, useMemo, useRef, useState } from "react";
import type { ChatbotConfig } from "../../types";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { motion, AnimatePresence } from "framer-motion";
import TypingDots from "./TypingDots";

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
  const initMessage: Message = {
    from: "bot",
    text: config?.greeting || "Xin chào 🖐",
  };
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([initMessage]);
  const [input, setInput] = useState("");
  const [showConfirmReset, setShowConfirmReset] = useState(false);

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

  const isLoading = useMemo(() => {
    return messages?.some((msg) => msg?.from === "botLoading");
  }, [messages]);

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
        bottom: bubbleHeight + 10,
        width: config?.width || 400,
        height: config?.height || 600,
        background: config?.background || bgColor,
        color: config?.color ?? textColor,
        borderRadius: config?.borderRadius || 8,
        boxShadow: `0 8px 24px ${config?.primaryColor}`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: config?.fontFamily || "'Roboto', sans-serif",
        zIndex: 999999,
        border: "1px solid #e3e3e3",
        ...positionStyle,
      }}
    >
      {/* Header */}
      <div
        className="chat-header"
        style={{
          background: config.headerStyle?.background || primaryColor,
          color: config.headerStyle?.color || "#333",
          padding: config.headerStyle?.padding || "10px 16px",
          fontSize: config.headerStyle?.fontSize || 18,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          ...config.headerStyle,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {config.botAvatar && (
            <img
              className="chat-avatar"
              src={config.botAvatar}
              alt="Bot"
              style={{ width: 40, height: 40, borderRadius: "50%" }}
            />
          )}
          <span>{config?.botName || "VnpostBot"}</span>
        </div>
        <span
          onClick={() => setShowConfirmReset(true)}
          style={{
            color: config.headerStyle?.color ?? "#333",
            fontSize: "25px",
            fontWeight: 500,
            transform: "rotate(-130deg)",
            cursor: "pointer",
          }}
        >
          ↺
        </span>
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
          gap: 12,
          fontSize: config.chatWindowStyle?.fontSize || 14,
          ...config?.chatWindowStyle,
        }}
      >
        <div
          className="avatar-window"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <img
            className="avatar-in-window"
            src={config.botAvatar}
            alt="Bot"
            style={{ width: 75, height: 60, borderRadius: "50%" }}
          />
          <p
            className="name-in-window"
            style={{ fontSize: 16, fontWeight: 600 }}
          >
            {config?.botName}
          </p>
        </div>

        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => {
            const isBot = msg?.from === "bot" || msg?.from === "botLoading";
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
                  alignSelf: msg?.from === "user" ? "flex-end" : "flex-start",
                  justifyContent:
                    msg?.from === "user" ? "flex-end" : "flex-start",
                  maxWidth: "100%",
                  width: "100%",
                }}
              >
                {isBot && config.botAvatar && (
                  <img
                    className="message-avatar"
                    src={config.botAvatar}
                    style={{ width: 30, height: 30, borderRadius: "50%" }}
                  />
                )}
                <div
                  className="message-content"
                  style={{
                    background:
                      msg?.from === "user"
                        ? config.chatWindowStyle?.background ?? "#ffeba6"
                        : "#eee",
                    color:
                      msg?.from === "user"
                        ? config.chatWindowStyle?.color ?? "#333"
                        : "#000",
                    padding: "0px 12px",
                    borderRadius: 8,
                    maxWidth: "63%",
                    wordWrap: "break-word",
                    minHeight: "30px",
                    wordSpacing: "1.2px",
                    lineHeight: "1.4",
                    alignItems:
                      msg?.from === "botLoading" ? "center" : "normal",
                    display: msg?.from === "botLoading" ? "flex" : "block",
                  }}
                >
                  {msg?.from === "botLoading" ? (
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
                        {msg?.text}
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
          padding: "10px 16px",
          paddingBottom: "4px",
          borderTop: "1px solid #eee",
          ...config.footerStyle,
        }}
      >
        <motion.div
          whileHover={{ border: `1px solid ${primaryColor}` }}
          whileFocus={{ border: `1px solid ${primaryColor}` }}
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            position: "relative",
            opacity: isLoading ? 0.6 : 1,
            padding: 4,
            ...config.footerStyle?.inputStyle,
          }}
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => !isLoading && setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault(); // Enter bình thường gửi tin, Shift+Enter xuống dòng
                sendMessage(input);
              }
            }}
            placeholder="Nhập tin nhắn..."
            style={{
              fontSize: 14,
              border: "none",
              outline: "none",
              padding: 10,
              borderRadius: 8,
              resize: "none",
              overflow: "auto",
              maxHeight: `20%`,
              width: "85%",
              cursor: "text",
            }}
          />

          <button
            className="send-button"
            onClick={() => !isLoading && sendMessage(input)}
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent",
              color: primaryColor,
              border: "none",
              borderRadius: 8,
              fontSize: "23px",
              cursor: isLoading ? "wait" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...config.footerStyle?.iconStyle,
            }}
          >
            {isLoading ? (
              <div
                style={{
                  width: 20,
                  height: 20,
                  border: "3px solid #ccc",
                  borderTop: `3px solid ${primaryColor}`,
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
            ) : (
              "➤"
            )}
          </button>

          <style>{`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}</style>
        </motion.div>
      </div>

      <div
        style={{
          width: "100%",
          textAlign: "center",
          paddingBottom: "6px",
          fontSize: "12px",
          color: "#A59C96",
        }}
      >
        ⚡ by MiPo
      </div>

      {/* Popup reset  */}
      {showConfirmReset && (
        <motion.div
          style={{
            width: "100%",
            padding: "12px 0",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            color: textColor,
          }}
        >
          <div
            className="overlay"
            onClick={() => setShowConfirmReset(false)}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          ></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "white",
              position: "absolute",
              zIndex: 1,
              textAlign: "center",
              width: "100%",
              bottom: 0,
              paddingBottom: "16px",
            }}
          >
            <div
              className="title"
              style={{
                margin: "16px auto",
                fontSize: "16px",
                color: "#000",
              }}
            >
              Tạo đoạn hội thoại mới?
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <button
                style={{
                  height: "40px",
                  borderRadius: "8px",
                  textAlign: "center",
                  width: "80%",
                  cursor: "pointer",
                  border: `1px solid ${primaryColor}`,
                  backgroundColor: primaryColor,
                  fontWeight: 700,
                }}
                onClick={() => {
                  setMessages([initMessage]);
                  setShowConfirmReset(false);
                }}
              >
                Tạo mới
              </button>
              <button
                style={{
                  height: "40px",
                  borderRadius: "8px",
                  textAlign: "center",
                  width: "80%",
                  cursor: "pointer",
                  border: `1px solid gray`,
                  fontWeight: 700,
                }}
                onClick={() => setShowConfirmReset(false)}
              >
                Huỷ
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ChatBotContainer;
