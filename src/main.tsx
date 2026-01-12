import ReactDOM from "react-dom/client";
import ChatbotBubble from "./ChatbotBubble";
import type { ChatbotConfig } from "./types";

export function init(config: ChatbotConfig) {
  const container = document.createElement("div");
  container.id = "chatbot-widget-root";
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(<ChatbotBubble config={config} />);
}

// gắn ra window cho CDN ESM/iife
declare global {
  interface Window {
    Chatbot: { init: (config: ChatbotConfig) => void };
  }
}
window.Chatbot = { init };
