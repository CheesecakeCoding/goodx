interface buttonProps {
  children: String;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

export const Button = ({
  children,
  color = "primary",
  onClick,
}: buttonProps) => {
  return (
    <button
      className={"btn btn-" + color + " btn-lg float-right"}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
