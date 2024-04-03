import Footer from "../../Organisms/Footer";
import Header from "../../Organisms/Header";

import { classNameGenerator } from "../../../utils";

import styles from "./MainTemplate.module.scss";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  const cls = classNameGenerator(styles);

  return (
    <>
      <Header />
      <main className={cls("mainTemplate")}>{children}</main>
      <Footer />
    </>
  );
};

export default MainTemplate;
