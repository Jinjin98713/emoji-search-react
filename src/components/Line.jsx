import { useState } from "react";
import { LuCopy, LuCheck } from "react-icons/lu";

const Line = ({ title, symbol }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div
      className="emoji-line"
      onClick={() => {
        navigator.clipboard.writeText(symbol).then(() => {
          setCopied(true);

          setTimeout(() => {
            setCopied(false);
          }, 2500);
          console.log(setTimeout);
        });
      }}
    >
      <span>{symbol}</span>
      <span>{title}</span>
      {copied === true ? (
        <div className="copy-feedback">
          <LuCheck />
          <span>Copied!</span>
        </div>
      ) : (
        <LuCopy />
      )}{" "}
    </div>
  );
};

export default Line;
