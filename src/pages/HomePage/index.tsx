import { classNameGenerator } from "../../utils";

import styles from "./HomePage.module.scss";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const cls = classNameGenerator(styles);

  return (
    <div className={cls("homePage")}>
      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;
