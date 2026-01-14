import React, { useState } from "react";
import type { ChatbotConfig } from "../types";
import { AnimatePresence } from "framer-motion";
import ChatBotContainer from "./shared/ChatBotContainer";

const ChatbotBubble: React.FC<{ config: ChatbotConfig }> = ({ config }) => {
  const [open, setOpen] = useState(false);

  const bubbleBg = config.bubbleStyle?.background || "#ffc600";
  const bubbleWidth = (config.bubbleStyle?.width as number) || 60;
  const bubbleHeight = (config.bubbleStyle?.height as number) || 60;

  const positionStyle =
    config.position === "bottom-left"
      ? { left: 20, right: "auto" }
      : { right: 20, left: "auto" };

  return (
    <div className="chat-wrapper">
      <div
        className="fab-icon"
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          width: bubbleWidth,
          height: bubbleHeight,
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
          zIndex: 999999,
          ...positionStyle,
          ...config.bubbleStyle,
        }}
      >
        {config.fabIcon || "💬"}
      </div>

      <AnimatePresence>
        {open && <ChatBotContainer config={config} />}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotBubble;
