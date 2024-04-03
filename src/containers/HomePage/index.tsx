import CountriesSearchInput from "../../components/Organisms/CountriesSearchInput";
import CountriesTable from "../../components/Organisms/CountriesTable";

import { classNameGenerator } from "../../utils";

import styles from "./HomePage.module.scss";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const cls = classNameGenerator(styles);

  return (
    <section className={cls("homePage")}>
      <div className={cls("container")}>
        <CountriesSearchInput />
        <CountriesTable />
      </div>
    </section>
  );
};

export default HomePage;
