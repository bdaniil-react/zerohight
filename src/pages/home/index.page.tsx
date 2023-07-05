// types
import type { FC } from "react";
// components
import Hero from "../../components/hero";
import Benefits from "../../components/benefits";
import ContactUs from "../../components/contact-us";
// mocks
import heroData from "../../mock/hero.json";
import benefitsData from "../../mock/benefits.json";

const HomePage: FC = () => {
  return (
    <>
      <Hero title={heroData.title} subtitle={heroData.subtitle} />
      {benefitsData.benefits.map(
        ({
          image,
          title,
          subtitle,
          benefits,
          testimonial,
          backgroundImage,
          isReverse,
        }) => (
          <Benefits
            image={image}
            title={title}
            subtitle={subtitle}
            benefits={benefits}
            testimonial={testimonial}
            backgroundImage={backgroundImage}
            isReverse={isReverse}
          />
        )
      )}
      <ContactUs />
    </>
  );
};

export default HomePage;
