import { useState } from "react";
import type { JSX } from "react";
import "./Copyrights.css";

export function Copyrights(): JSX.Element {
  const currentYear = new Date().getFullYear().toString();
  const [showMessage, setShowMessage] = useState(false);
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

  function showName(): void {
    setShowMessage(true);
    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setShowMessage(false);
      setTimeoutId(null);
    }, 3000);

    setTimeoutId(id);
  }

  return (
    <div className="Copyrights">
      <h4 onClick={showName}>All rights reserved © {currentYear}</h4>
      <div className={`fade-message ${showMessage ? "show" : ""}`}>
        By{" "}
        <a
          href="https://www.linkedin.com/in/alex-cole-6a5651219/"
          target="_blank"
          rel="noopener noreferrer"
          className="author-link"
        >
          Alex Cole
        </a>
      </div>
    </div>
  );
}
