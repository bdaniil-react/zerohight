import { memo, type FC } from "react";
// types
import type { HeroProps } from "./hero.interface";
import Button from "../button/button";

const Hero: FC<HeroProps> = ({ title, subtitle }) => (
  <section className="container mx-auto px-10 py-6">
    <div className="grid grid-flow-dense lg:grid-cols-2 justify-items-center lg:gap-16 gap-6">
      <div className="flex flex-col">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold tracking-widest lg:leading-normal">
          {title}
        </h2>
        <h3 className="lg:text-lg text-sm tracking-widest pt-4">{subtitle}</h3>
        <div className="flex lg:flex-row flex-col gap-5 mt-8">
          <Button title="Sign Up for free" variant="filled" isFullWidth />
          <Button title="Request a demo" variant="outlined" isFullWidth />
        </div>
      </div>
      <div className="row-start-1 lg:row-auto md:w-[510px] w-full">
        <img alt="hero" src="./hero.png" className="w-full" />
      </div>
    </div>
  </section>
);

export default memo(Hero);
