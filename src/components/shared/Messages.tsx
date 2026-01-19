import type { ChatbotConfig, Message } from "../../types";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { motion, AnimatePresence } from "framer-motion";
import TypingDots from "./TypingDots";
import type { Ref } from "react";
import logo from "../../../assets/logo.png";

interface IProps {
  config: ChatbotConfig;
  messages: Message[];
  messagesEndRef: Ref<HTMLDivElement> | undefined;
}

const Messages = ({ config, messages, messagesEndRef }: IProps) => {
  return (
    <div
      className="message-wrapper"
      style={{
        flex: 1,
        padding: config.chatWindowStyle?.padding || 16,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginBottom: 50,
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
          textAlign: "center",
          gap: 12,
        }}
      >
        <img
          className="avatar-in-window"
          src={config.botAvatar || logo}
          alt="Bot"
          style={{ width: 60, height: 60, borderRadius: "50%" }}
        />
        <div
          className="name-in-window"
          style={{ fontSize: 16, fontWeight: 600 }}
        >
          {config?.botName}
        </div>
        {config?.botDescription && (
          <div style={{ fontSize: 13, fontWeight: 500, maxWidth: 350 }}>
            {config?.botDescription || "Trợ lý ảo Mipo"}
          </div>
        )}
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
                  src={config.botAvatar || logo}
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
                  lineHeight: 1.45,
                  letterSpacing: "0.25px",
                  wordSpacing: "1.2px",
                  alignItems: msg?.from === "botLoading" ? "center" : "normal",
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
  );
};

export default Messages;
