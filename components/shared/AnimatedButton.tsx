import React from "react";

interface AnimatedButtonProps {
  text: string;
  hoverText?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  hoverText,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "relative overflow-hidden transition-all duration-300 ease-in-out font-medium rounded-lg border-solid_medium-gray";

  const variants = {
    primary: "bg-black_hover-gray text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg w-full",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        group
        hover:-translate-y-1 active:translate-y-0
        disabled:cursor-not-allowed
        disabled:opacity-50
        disabled:hover:translate-y-0
      `}
    >
      <div className="relative">
        {/* Default text */}
        <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
          {text}
        </span>

        {/* Hover text that slides up */}
        <span className="absolute left-0 top-0 w-full translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {hoverText || text}
        </span>
      </div>
    </button>
  );
};

export default AnimatedButton;
