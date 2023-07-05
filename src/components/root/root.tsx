// components
import Main from "../main";
import Header from "../header";
import Footer from "../footer/footer";
import HomePage from "../../pages/home/index.page";
// types
import type { FC } from "react";

const Root: FC = () => (
  <>
    <Header />
    <Main>
      <HomePage />
    </Main>
    <Footer />
  </>
);

export default Root;
