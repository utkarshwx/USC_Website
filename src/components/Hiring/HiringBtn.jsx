import React from "react";
import "./style.css";

export default function HiringBtn({ onTap }) {
  return (
    <button onClick={onTap}>
      <span class="span-mother">
        <span>J</span>
        <span>o</span>
        <span>i</span>
        <span>n</span>
      </span>
      <span class="span-mother2">
        <span>J</span>
        <span>o</span>
        <span>i</span>
        <span>n</span>
      </span>
    </button>
  );
}
