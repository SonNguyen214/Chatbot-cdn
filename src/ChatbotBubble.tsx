import React from "react"
import type { ChatbotConfig } from "./main"

const ChatbotBubble = ({ config }: { config: ChatbotConfig }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: config.primaryColor || '#4f46e5',
          cursor: 'pointer'
        }}
      />

      {open && (
        <div style={{
          position: 'fixed',
          bottom: 90,
          right: 20,
          width: 320,
          height: 420,
          background: '#fff',
          borderRadius: 12
        }}>
          {config.greeting}
        </div>
      )}
    </>
  )
}

export default ChatbotBubble