import { memo, type FC } from "react";
// types
import type { BenefitProps } from "./benefit.interface";

const Benefit: FC<BenefitProps> = ({ benefit, isFillCircle }) => {
  const fillClass = "bg-sky-900";

  return (
    <div className="flex flex-row lg:gap-10 gap-4">
      <div
        className={`flex justify-center items-center w-16 h-16 rounded-full ${
          isFillCircle ? fillClass : "bg-white"
        }`}
      >
        <img alt={benefit.id} src={benefit.icon} className="w-9/12" />
      </div>
      <p className="flex-1 lg:text-base text-sm">{benefit.description}</p>
    </div>
  );
};

export default memo(Benefit);
