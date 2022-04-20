import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function CookerRepair() {
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
      <h1 className={styles.applianceTitleServicePage}>Cooker Repair London</h1>
      <span className={styles.serviceSubTitle}>
        Let us take the stress out of your appliance repairs
      </span>
      <div className={styles.serviceImgContainer}>
        <Image
          src="/rangemaster-cooker.jpg"
          alt="Cooker"
          width={850}
          height={460}
          quality="100"
          className={styles.appliancePicServicePage}
        />
      </div>
      <div className={styles.repairDescriptionServicePage}>
        <ul>
          <li>Cooker not turning on</li>
          <li>Cooker tripping the electrics</li>
          <li>Cooker burners not working</li>
          <li>Cooker not heating</li>
          <li>Cooker door came off</li>
        </ul>{" "}
        If your cooker isn&#39;t working like it should, we are here to help,
        seven days a week and available within 24 hours.
        <br />
        <br />
        We repair electric cookers from all major brands including Bosch,
        Siemens, Hotpoint, Indesit, Beko, and more.
        <br />
        <br />
        <b>Cooker Installation</b>
        <br />
        <br />
        If you have bought a new cooker and would like someone to install it, we
        provide installation service for all types of electric cookers.
        <br /> <br />
        Our standard fee for repairs / installation service is £79.
        <br /> <br />
        Simply make a booking above and we promise to provide you a high
        standard service.
      </div>
    </div>
  );
}
