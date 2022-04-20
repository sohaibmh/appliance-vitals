import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function DishwasherRepair() {
  return (
    <div
      id="service"
      style={{
        width: "auto",
        height: "auto",
        margin: "0",
        padding: "0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        padding: "5vw",
        paddingTop: "1vw",
        margin: "2vw",
        fontSize: "30px",
      }}
    >
      <h1 className={styles.applianceTitleServicePage}>
        Dishwasher Repair London
      </h1>
      <span className={styles.serviceSubTitle}>
        Let us take the stress out of your appliance repairs
      </span>
      <div className={styles.serviceImgContainer}>
        <Image
          src="/amana-dishwasher.png"
          alt="Dishwasher"
          width={1186}
          height={597}
          quality="100"
          className={styles.appliancePicServicePage}
        />
      </div>
      <div className={styles.repairDescriptionServicePage}>
        <ul>
          <li>Dishwasher not draining</li>
          <li>Dishwasher not heating water</li>
          <li>Dishwasher not turning on</li>
          <li>Dishwasher leaking water</li>
          <li>Dishwasher door not closing</li>
        </ul>{" "}
        If your dishwasher isn&#39;t working like it should, we are here to
        help, seven days a week and available within 24 hours.
        <br />
        <br />
        We repair integrated and freestanding dishwashers from all major brands
        including Bosch, Miele, Hotpoint, Indesit, Beko, and more.
        <br />
        <br />
        <b>Dishwasher Installation</b>
        <br />
        <br />
        If you have bought a new dishwasher and would like someone to install
        it, we carry out installation of both integrated and freestanding
        dishwashers.
        <br /> <br />
        Our standard fee for repairs / installation service is £79.
        <br /> <br />
        Simply make a booking above and we promise to provide you a high
        standard service.
      </div>
    </div>
  );
}
