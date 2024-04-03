import { classNameGenerator } from "../../../utils";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const cls = classNameGenerator(styles);

  return (
    <footer className={cls("footer")}>
      <div className={cls("container")}>
        <p>Copyright © 2023 Crest Data Systems.</p>
      </div>
    </footer>
  );
};

export default Footer;
