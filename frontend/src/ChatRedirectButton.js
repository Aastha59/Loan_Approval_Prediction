import React, { useState } from "react";

const ChatRedirectButton = ({ chatbotUrl }) => {
  const [open, setOpen] = useState(false);

  // Opens chatbot in new tab or current tab
  const openChatbot = () => {
    if (chatbotUrl) {
      window.open(chatbotUrl, "_blank"); // open in new tab
      // or use: window.location.href = chatbotUrl; to redirect same tab
      setOpen(false); // close panel if open
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "#043cf6ff",
          color: "#fff",
          borderRadius: "50%",
          width: 60,
          height: 60,
          border: "none",
          fontSize: 30,
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
        aria-label={open ? "Close chat window" : "Open chat window"}
      >
        💬
      </button>

      {/* Optional pop-up panel when open */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 20,
            width: 300,
            backgroundColor: "#fff",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            zIndex: 1000,
            padding: 20,
            fontSize: 16,
          }}
        >
          <p style={{ marginBottom: 16 }}>
            Click the button below to open the chatbot.
          </p>
          <button
            onClick={openChatbot}
            style={{
              backgroundColor: "#2113e3ff",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Open Chatbot
          </button>
        </div>
      )}
    </>
  );
};

export default ChatRedirectButton;
