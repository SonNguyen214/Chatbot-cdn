import type { ChatbotConfig } from "../../types";
import { motion } from "framer-motion";

interface IProps {
  config: ChatbotConfig;
  primaryColor: string;
  setClosePopup: (a: boolean) => void;
  setShowConfirmReset: (a: boolean) => void;
}

const Header = ({
  config,
  setClosePopup,
  primaryColor,
  setShowConfirmReset,
}: IProps) => {
  return (
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

      <motion.div
        className="chat-actions"
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <motion.span
          whileHover={{ backgroundColor: "#777373" }}
          className="minimize"
          onClick={() => setClosePopup(false)}
          style={{
            color: config.headerStyle?.color ?? "#333",
            fontSize: "25px",
            fontWeight: 500,
            cursor: "pointer",
            width: 30,
            height: 30,
            borderRadius: "50%",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          –
        </motion.span>
        <motion.span
          whileHover={{ backgroundColor: "#777373" }}
          onClick={() => setShowConfirmReset(true)}
          style={{
            color: config.headerStyle?.color ?? "#333",
            fontSize: "25px",
            fontWeight: 500,
            transform: "rotate(-130deg)",
            cursor: "pointer",
            width: 30,
            height: 30,
            borderRadius: "50%",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          ↺
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Header;
