// import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatbotBubble from './ChatbotBubble';

export interface ChatbotConfig {
  botId: string;
  greeting?: string;
  position?: 'bottom-right' | 'bottom-left';
  primaryColor?: string;      // màu bubble + header
  bubbleSize?: number;        // px
  chatWidth?: number;         // px
  chatHeight?: number;        // px
  fontSize?: number;          // px
  borderRadius?: number;      // px
  animationDuration?: number; // s
}

export function init(config: ChatbotConfig) {
  const container = document.createElement('div');
  container.id = 'chatbot-widget-root';
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(
    <ChatbotBubble config={config} />
  );
}
