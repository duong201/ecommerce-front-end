import classNames from "classnames";
import React from "react";
import "./button.css";

interface ButtonProps {
  text: string;
  showLabel?: boolean;
  onClick: () => void;
  type?:
    | "navBtn"
    | "btnCategory"
    | "btnSearchSuggestions"
    | "btnPay"
    | "btnLogin"
    | "btnAddToCart";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type,
  showLabel = true,
}) => {
  const buttonClass = classNames("btn", {
    navBtn: type === "navBtn",
    btnCategory: type === "btnCategory",
    btnSearchSuggestions: type === "btnSearchSuggestions",
    btnPay: type === "btnPay" || type === "btnAddToCart",
    btnLogin: type === "btnLogin",
  });
  return (
    <div>
      <button className={buttonClass} onClick={onClick}>
        {showLabel && <div className="btn-text">{text}</div>}
      </button>
    </div>
  );
};

export default Button;
