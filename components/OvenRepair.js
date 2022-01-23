import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function OvenRepair() {
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
      <h2 className={styles.applianceTitleServicePage}>Oven Repair London</h2>
      <span className={styles.serviceSubTitle}>
        Let us take the stress out of your appliance repairs
      </span>
      <div className={styles.serviceImgContainer}>
        <Image
          src="/bosch-oven.png"
          alt="Oven"
          width={2200}
          height={1086}
          quality="100"
          className={styles.appliancePicServicePage}
        />
      </div>
      <div className={styles.repairDescriptionServicePage}>
        <ul>
          <li>Oven not heating up</li>
          <li>Oven not turning on</li>
          <li>Oven tripping the electrics</li>
          <li>Oven fan making loud noise</li>
          <li>Oven door came off</li>
        </ul>{" "}
        If your oven isn&#39;t working like it should, we are here to help,
        seven days a week and available within 24 hours.
        <br />
        <br />
        We repair electric ovens from all major brands including Bosch, Miele,
        Hotpoint, Indesit, Beko, and more.
        <br />
        <br />
        <b>Oven Installation</b>
        <br />
        <br />
        If you have bought a new oven and would like someone to install it, we
        provide installation service for all types of electric ovens.
        <br /> <br />
        Our standard fee for repairs / installation service is £79.
        <br /> <br />
        Simply make a booking above and we promise to provide you a high
        standard service.
      </div>
    </div>
  );
}
