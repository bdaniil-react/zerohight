import { memo, type FC } from "react";
// components
import Benefit from "../benefit";
// types
import type { BenefitsProps } from "./benefits.interface";
import Testimonial from "../testimonial";

const Benefits: FC<BenefitsProps> = ({
  image,
  title,
  subtitle,
  benefits,
  testimonial,
  backgroundImage,
  isReverse,
}) => {
  const reverseClass = "row-start-1";

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="bg-full-auto bg-no-repeat bg-center"
    >
      <div className="container grid lg:grid-cols-2 items-center gap-10 mx-auto px-10 lg:py-20 py-10">
        <div className="flex flex-col gap-6">
          <h2 className="md:text-3xl text-xl font-bold">{title}</h2>
          <p className="lg:text-lg text-sm">{subtitle}</p>
          <div className="flex flex-col gap-4">
            {benefits.map((benefit) => (
              <Benefit benefit={benefit} isFillCircle={!backgroundImage} />
            ))}
          </div>
        </div>
        <div className={`flex justify-center ${isReverse ? reverseClass : ""}`}>
          <div className="flex flex-col gap-12 w-full max-w-md">
            <img alt={title} src={image} />
            <Testimonial testimonial={testimonial} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Benefits);
