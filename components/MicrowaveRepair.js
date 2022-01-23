import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function MicrowaveRepair() {
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
      <h2 className={styles.applianceTitleServicePage}>
        Microwave Repair London
      </h2>
      <span className={styles.serviceSubTitle}>
        Let us take the stress out of your appliance repairs
      </span>
      <div className={styles.serviceImgContainer}>
        <Image
          src="/miele-microwave.png"
          alt="Microwave"
          width={1197}
          height={512}
          quality="100"
          className={styles.appliancePicServicePage}
        />
      </div>
      <div className={styles.repairDescriptionServicePage}>
        <ul>
          <li>Microwave not turning on</li>
          <li>Microwave tripping the electrics</li>
          <li>Microwave not heating</li>
          <li>Microwave electrical issues</li>
          <li>Microwave door not closing</li>
        </ul>{" "}
        If your microwave isn’t working like it should, we are here to help,
        seven days a week and available within 24 hours.
        <br />
        <br />
        We repair integrated microwaves from all major brands including Bosch,
        Miele, Hotpoint, Indesit, Siemens, and more.
        <br />
        <br />
        <b>Microwave Installation</b>
        <br />
        <br />
        If you have bought a new integrated microwave and would like someone to
        install it, we provide installation service for all types of integrated
        microwaves.
        <br /> <br />
        Our standard fee for repairs / installation service is £79.
        <br /> <br />
        Simply make a booking above and we promise to provide you a high
        standard service.
      </div>
    </div>
  );
}
