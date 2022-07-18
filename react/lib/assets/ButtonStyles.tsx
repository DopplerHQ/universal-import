import React from "react";

export default function ButtonStyles() {
  return (
    <style>
      {`
        .doppler-btn {
          all: initial;
          display: grid;
          grid-auto-flow: column;
          gap: 4px;
          align-items: center;
          flex-shrink: 0;
          max-width: 80px;
          padding: 8px;
          padding-top: 9px;
          font-weight: 700;
          border-radius: 5px;
          border: unset;
          color: #fff;
          background: linear-gradient(216.71deg, #4f80ff 6.72%, #7a4bff 91.2%);
          cursor: pointer;
        }
    `}
    </style>
  );
}
