interface buttonProps {
  children: String;
  color?: "primary" | "secondary" | "danger" | "outline-secondary";
  onClick: () => void;
  size?: "btn-lg" | "btn-sm";
  block: "" | "btn-block";
  float: "float-left" | "float-right" | "float-none";
}

export const Button = ({
  children,
  color = "primary",
  onClick,
  size = "btn-lg",
  block = "",
  float = "float-right",
}: buttonProps) => {
  return (
    <button
      className={"btn btn-" + color + " " + size + " " + float}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
