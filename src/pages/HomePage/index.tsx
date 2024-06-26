import MainTemplate from "../../components/Templates/MainTemplate";
import HomePageContainer from "../../containers/HomePage";

import { classNameGenerator } from "../../utils";

import styles from "./HomePage.module.scss";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const cls = classNameGenerator(styles);

  return (
    <MainTemplate>
      <div className={cls("homePage")}>
        <HomePageContainer />
      </div>
    </MainTemplate>
  );
};

export default HomePage;
