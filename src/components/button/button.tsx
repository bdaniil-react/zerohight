import { memo, useMemo, type FC } from "react";
// types
import type { ButtonProps } from "./button.interface";

const Button: FC<ButtonProps> = ({
  type,
  title,
  variant,
  isFullWidth,
  onClick,
}) => {
  const base = useMemo(
    () =>
      `p-4 rounded-xl lg:text-sm text-md duration-300 pointer ${
        isFullWidth ? "w-full flex-1" : ""
      }`,
    [isFullWidth]
  );
  const filledVariant = "text-white bg-rose-500 pointer hover:bg-rose-600";
  const defaultVariant = "hover:text-rose-500";
  const outlinedVariant =
    "border-4 border-sky-900 text-sky-900 hover:bg-sky-900 hover:text-white";

  const classes = useMemo(() => {
    switch (variant) {
      case "filled":
        return filledVariant;
      case "outlined":
        return outlinedVariant;
      default:
        return defaultVariant;
    }
  }, [variant]);

  return (
    <button className={`${base} ${classes}`} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default memo(Button);
