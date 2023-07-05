export interface ButtonProps {
  type?: "reset" | "button" | "submit";
  title: string;
  variant?: "filled" | "default" | "outlined";
  isFullWidth?: boolean;
  onClick?: () => void;
}
