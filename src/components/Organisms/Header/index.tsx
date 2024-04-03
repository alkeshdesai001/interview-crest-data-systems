import { classNameGenerator } from "../../../utils";

import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const cls = classNameGenerator(styles);

  return (
    <header className={cls("header")}>
      <div className={cls("container")}>
        <img
          className={cls("logo")}
          src="https://www.crestdatasys.com/wp-content/uploads/elementor/thumbs/CDS-NewLogo-dark-high-1-p9tn2evgy27xk1etn2540iths02xohbmb6tdk3esw0.png"
          title="Crest Data Systems Logo"
          alt="Crest Data Systems Logo"
        />
      </div>
    </header>
  );
};

export default Header;
