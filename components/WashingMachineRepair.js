import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function WashingMachineRepair() {
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
        Washing Machine Repair London
      </h1>
      <span className={styles.serviceSubTitle}>
        Let us take the stress out of your appliance repairs
      </span>
      <div className={styles.serviceImgContainer}>
        <Image
          src="/miele-washing-machine.webp"
          alt="Washing Machine"
          width={1215}
          height={496}
          quality="100"
          className={styles.appliancePicServicePage}
        />
      </div>
      <div className={styles.repairDescriptionServicePage}>
        <ul>
          <li>Washing machine not draining</li>
          <li>Washing machine stopped working mid cycle</li>
          <li>Washing machine door not opening </li>
          <li>Washing machine stopped taking fabric conditioner</li>
          <li>Washing machine making too much noise</li>
        </ul>{" "}
        If your washing machine or dryer isn&#39;t working like it should, we
        are here to help, seven days a week and available within 24 hours.{" "}
        <br />
        <br />
        We repair freestanding and integrated washing machines and dryers from
        all major brands including Bosch, Miele, Hotpoint, Indesit, Beko, and
        more. <br />
        <br />
        <b>Washing Machine Installation</b>
        <br />
        <br /> If you have bought a new washing machine and would like someone
        to install it, we carry out installation of both freestanding and
        integrated washing machines.
        <br /> <br />
        Our standard fee for repairs / installation service is £79.
        <br /> <br />
        Simply make a booking above and we promise to provide you a high
        standard service.
        <br /> <br />
        <b>
          <Link href="/blogs/how-to-troubleshoot-and-fix-a-washing-machine-that-wont-drain">
            How to Troubleshoot and Fix a Washing Machine That Won&#39;t Drain
          </Link>
        </b>
      </div>
    </div>
  );
}
