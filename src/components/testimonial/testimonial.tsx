import { memo, type FC } from "react";
// types
import type { TestimonialProps } from "./testimonial.interface";

const Testimonial: FC<TestimonialProps> = ({ testimonial }) => (
  <article className="bg-white lg:p-10 p-5 border-sky-900 border-4 rounded-xl">
    <p className="lg:text-base text-sm">"{testimonial.text}"</p>
    <p className="mt-4 lg:text-base text-xs text-right italic">
      {testimonial.author}
    </p>
  </article>
);

export default memo(Testimonial);
