import ReactDOM from 'react-dom/client';
import ChatbotBubble from './ChatbotBubble';

export interface ChatbotConfig {
  botId: string;
  position?: 'bottom-right' | 'bottom-left';
  primaryColor?: string;
  greeting?: string;
}

export function init(config: ChatbotConfig) {
  const container = document.createElement('div');
  container.id = 'chatbot-widget-root';
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(
    <ChatbotBubble config={config} />
  );
}
