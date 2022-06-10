import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Layout(props) {
  const homepage = () => {
    document.location.href = "/";
  };

  return (
    <div>
      <header className={styles.header}>
        <span className={styles.logo}>
          <Image
            className={styles.logoImg}
            src="/logo-transparent-168-min.png"
            alt="Appliance Vitals Logo"
            width={147.6}
            height={91.4}
            quality="100"
            onClick={homepage}
          />
        </span>
      </header>
      {props.children}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <Image
            className={styles.logoImg}
            src="/logo-transparent-168-min.png"
            alt="Appliance Vitals Logo"
            width={118.08}
            height={73.12}
            quality="100"
            onClick={homepage}
          />
        </div>
        <div>
          <b>Our Location</b>
          <br />
          East Barnet <br />
          London <br />
          <br />
        </div>
        <div>
          <b>Contact Us</b>
          <br />
          <a href="mailto:admin@appliancevitals.com">
            admin@appliancevitals.com
          </a>
        </div>
      </footer>
    </div>
  );
}
