import { memo, type FC } from "react";
// components
import Button from "../button";

const ContactUs: FC = () => (
  <section className="container grid lg:grid-cols-2 items-center gap-12 mx-auto px-10 py-10 ">
    <div className="flex justify-center ">
      <div className="flex flex-col gap-6 w-full max-w-md">
        <h2 className="md:text-3xl text-xl font-bold">
          Ready to level up your design system?
        </h2>
        <p className="g:text-lg text-sm">
          Get in touch with us today to organize a demo and see everything
          zeroheight has to offer
        </p>
        <div className="flex flex-row gap-4">
          <Button title="Contact" variant="filled" isFullWidth />
          <Button title="Sign up" variant="outlined" isFullWidth />
        </div>
      </div>
    </div>
    <div className="flex justify-center ">
      <div className="w-full max-w-md">
        <img alt="phone" src="/phone.png" />
      </div>
    </div>
  </section>
);

export default memo(ContactUs);
