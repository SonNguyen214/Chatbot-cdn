/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ChatbotConfig {
  botId: string;
  greeting?: string;
  position?: "bottom-right" | "bottom-left";
  theme?: "light" | "dark";
  fabIcon?: string; // icon bubble
  botAvatar?: string; // avatar bot
  botName?: string;
  primaryColor?: string;
  headerStyle?: Partial<CSSStyle>; // CSS cho header
  chatWindowStyle?: Partial<CSSStyle>; // CSS cho message body
  footerStyle?: Partial<CSSStyle>; // CSS cho input + button
  bubbleStyle?: Partial<CSSStyle>; // CSS cho FAB bubble
  apiHost?: string; // <-- Thêm apiHost
  autoShowDelay?: number;
  fontFamily?: string;
}

interface CSSStyle {
  width?: string | number;
  height?: string | number;
  fontSize?: number;
  borderRadius?: number;
  background?: string;
  color?: string;
  padding?: string | number;
  [key: string]: any;
}
