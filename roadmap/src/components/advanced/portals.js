import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

const Portals = () => {
  const [position, setPosition] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const onClickIcon = (e) => {
    const rect = e.target.getBoundingClientRect();
    setPosition({
      left: rect.x + rect.width,
      top: rect.y + window.scrollY,
    });
    setIsClicked(!isClicked);
  };

  const styles = {
    toolTipBubble: {
      display: "flex",
      justifyContent: "space-between",
      width: "20rem",
      backgroundColor: "#4a4a4a",
      padding: "0.25rem 0.5rem",
      borderRadius: "0.5rem",
      color: "white",
      position: "absolute",
      marginTop: "-5rem",
      marginLeft: "-2.5rem",
    },
    toolTipTriangle: {
      position: "absolute",
      marginTop: "3.5rem",
      marginLeft: "1rem",
      fill: "#4a4a4a",
    },
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.5rem",
      borderRadius: "10rem",
      border: "2px solid #4a4a4a",
      color: "#4a4a4a",
      width: "0.5rem",
      height: "0.5rem",
      backgroundColor: "none",
      background: "none",
      boxShadow: "none",
    },
    input: {
      backgroundColor: "rgb(220, 220, 220)",
      padding: "1rem",
      borderRadius: "0.5rem",
      border: "1px solid rgb(187, 187, 187)",
    },
  };

  return (
    <div>
      <h2>Portals:</h2>
      <div className="card">
        <div>
          <button style={styles.icon} onClick={onClickIcon}>
            <label>i</label>
          </button>
          <input style={styles.input} />
        </div>
        {isClicked && (
          <Portal>
            <div
              style={{
                ...styles.toolTipBubble,
                left: position.left,
                top: position.top,
              }}
            >
              <svg height="20" width="20" style={styles.toolTipTriangle}>
                <polygon points="0,0 20,0 10,10" />
              </svg>
              <p>Tooltip text</p>
            </div>
          </Portal>
        )}
      </div>
    </div>
  );
};

export default Portals;
