import Link from "next/link";
import styles from "../styles/Navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Link href='/' className={styles.logo}>
              Andres Diaz.
            </Link>
            <FontAwesomeIcon style={{ color: "white" }} icon={faCoffee} />
          </h1>
          <ul>
            <li>
              <Link href='/' className={styles.current}>
                Home
              </Link>
            </li>
            <li>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link href='/about'>About Me</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
