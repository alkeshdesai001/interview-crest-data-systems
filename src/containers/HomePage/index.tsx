import CountriesSearchInput from "../../components/Organisms/CountriesSearchInput";

import { classNameGenerator } from "../../utils";

import styles from "./HomePage.module.scss";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const cls = classNameGenerator(styles);

  return (
    <section className={cls("homePage")}>
      <div className={cls("container")}>
        <CountriesSearchInput />
        <h1>HomePage</h1>
      </div>
    </section>
  );
};

export default HomePage;
