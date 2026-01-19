import { useMemo, useRef, useState } from "react";
import type { ChatbotConfig, Message } from "../../types";
import axios from "axios";
import { motion } from "framer-motion";

interface IProps {
  config: ChatbotConfig;
  primaryColor: string;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const MOCK_RESPONSES = [
  "Xin chào! 👋 Tôi có thể giúp gì cho bạn?",
  "Bạn có muốn tìm hiểu về sản phẩm của chúng tôi không?",
  "Chúng tôi luôn sẵn sàng hỗ trợ bạn!",
  "Cảm ơn bạn đã nhắn tin!",
];

const Footer = ({ messages, setMessages, config, primaryColor }: IProps) => {
  const [input, setInput] = useState("");

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const isLoading = useMemo(() => {
    return messages?.some((msg) => msg?.from === "botLoading");
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    setMessages((prev: Message[]) => [...prev, { from: "user", text }]);
    setInput("");

    setMessages((prev: Message[]) => [
      ...prev,
      { from: "botLoading", text: "..." },
    ]);

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

  return (
    <motion.div
      className="footer"
      style={{
        padding: "10px 16px",
        paddingBottom: 0,
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

    p {
        margin: 10px 0 !important
    }
  `}</style>
      </motion.div>

      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "5px 0",
          fontSize: "12px",
          color: "#A59C96",
        }}
      >
        ⚡ by MiPo
      </div>
    </motion.div>
  );
};

export default Footer;
