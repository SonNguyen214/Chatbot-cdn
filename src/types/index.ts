export interface ChatbotConfig {
  botId: string;
  greeting?: string;
  position?: "bottom-right" | "bottom-left";
  primaryColor?: string; // màu bubble + header
  bubbleSize?: number; // px
  chatWidth?: number; // px
  chatHeight?: number; // px
  fontSize?: number; // px
  borderRadius?: number; // px
  animationDuration?: number; // s
}
