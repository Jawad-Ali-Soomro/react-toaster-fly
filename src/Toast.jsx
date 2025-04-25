import React, { useState, useEffect } from "react";
import "./Toaster.css";

const Toast = ({
  message,
  icon,
  timeout = 2000,
  border,
  background,
  position,
  radius,
  color,
}) => {
  const Icon = icon;
  const [cords, setCords] = useState({});
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    switch (position) {
      case "top-left":
        setCords({ top: "20px", left: "20px" });
        break;
      case "top-right":
        setCords({ top: "20px", right: "20px" });
        break;
      case "bottom-left":
        setCords({ bottom: "20px", left: "20px" });
        break;
      case "bottom-right":
        setCords({ bottom: "20px", right: "20px" });
        break;
      default:
        setCords({ top: "20px", right: "20px" });
        break;
    }
  }, [position]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, timeout);

    return () => clearTimeout(timer); 
  }, [timeout]);

  if (!visible) return null;

  return (
    <div
      className="toaster-wrapper"
      style={{
        position: "fixed",
        ...cords,
        borderRadius: radius,
        background: background,
        border: border ? "1px solid #80808090" : "none",
        color: color,
        gap: "8px",
        zIndex: 9999,
      }}
    >
      {Icon && <Icon />}
      <p>{message}</p>
    </div>
  );
};

export default Toast;
