import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function FridgeFreezerRepair() {
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
        Fridge Freezer Repair London
      </h2>
      <span className={styles.serviceSubTitle}>
        Let us take the stress out of your appliance repairs
      </span>
      <div className={styles.serviceImgContainer}>
        <Image
          src="/miele-fridge-freezer.png"
          alt="Fridge Freezer"
          width={1214}
          height={575}
          quality="100"
          className={styles.appliancePicServicePage}
        />
      </div>
      <div className={styles.repairDescriptionServicePage}>
        <ul>
          <li>Fridge freezer electrical issues</li>
          <li>Fridge freezer frosting up</li>
          <li>Fridge freezer not cooling enough</li>
          <li>Fridge freezer ice maker not working</li>
          <li>Fridge freezer leaking water</li>
        </ul>{" "}
        If your fridge freezer isn&#39;t working like it should, we are here to
        help, seven days a week and available within 24 hours.
        <br />
        <br />
        We repair freestanding and integrated fridge freezers from all major
        brands including Bosch, Miele, Hotpoint, Indesit, Beko, and more.
        <br />
        <br />
        <b>Fridge Freezer Installation</b>
        <br />
        <br />
        If you have bought a new integrated fridge freezer and would like
        someone to install it, we provide installation service for all types of
        integrated fridge freezers.
        <br /> <br />
        Our standard fee for repairs / installation service is £79.
        <br /> <br />
        Simply make a booking above and we promise to provide you a high
        standard service.
      </div>
    </div>
  );
}
