const variants = {
  filled: "bg-white",
  outlined: "bg-transparent border-2 box-border",
};

const CustomButton = ({ variant, color, children }) => {
  const borderColor = color === "white" ? "border-white" : "border-secondary";
  return (
    <button
      className={`${variants[variant]} ${
        variant === "filled" ? "" : borderColor
      } px-7 py-2 rounded-full`}
    >
      <p
        className={`text-xl font-medium ${
          variant === "filled" ? "text-secondary" : `text-${color}`
        }`}
      >
        {children}
      </p>
    </button>
  );
};

export default CustomButton;
