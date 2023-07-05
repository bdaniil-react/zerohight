// types
import type { Benefit } from "../../types/benefit.types";
import type { Testimonial } from "../../types/testimonial.types";

export interface BenefitsProps {
  image: string;
  title: string;
  subtitle: string;
  benefits: Benefit[];
  testimonial: Testimonial;
  backgroundImage: string;
  isReverse?: boolean;
}
