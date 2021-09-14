import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  washingMachine,
  fridge,
  cooker,
  oven,
  dishwasher,
  microwave,
  poundCoins,
  repairTools,
  faulty,
} from "../svgs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Appliance Repair Service in London | Appliance Vitals Ltd</title>
        <meta charSet="UTF-8"></meta>
        <meta
          name="description"
          content="Repair of all kitchen appliances including washing machines, fridge freezers, ovens, dishwashers, cookers, and more."
        />
        <meta
          name="keywords"
          content="Washing machine repair, fridge freezer repair, oven repair, dishwasher repair, cooker repair"
        />
        <meta httpEquiv="x-ua-compatible" content="IE=Edge,chrome=1"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Assuring fix to your appliance problem.
        </h1>
        <h2 className={styles.title2}>
          We repair all domestic electrical appliances, including washing
          machines, fridge freezers, ovens, dishwashers, cookers, and more.
          Available within 24 hours throughout London. You can book our service
          online, choosing your own date/time depending on your availability.
          Our engineer will visit your address and fix your appliance issue.
        </h2>

        <form action="https://appliancevitals.simplybook.it/v2/#book">
          <button type="submit" className={styles.bookNowButton}>
            BOOK NOW &nbsp; &#128342;
          </button>
        </form>

        <div className={styles.services}>
          <div>
            <span>{washingMachine}</span>
            <span> Washing Machine Repair</span>
          </div>
          <div>
            <span>{fridge}</span>
            <span>Fridge Freezer Repair</span>
          </div>
          <div>
            <span>{oven}</span>
            <span>Oven Repair</span>
          </div>
          <div>
            <span>{dishwasher}</span>
            <span>Dishwasher Repair</span>
          </div>
          <div>
            <span>{cooker}</span>
            <span>Cooker Repair</span>
          </div>
          <div>
            <span>{microwave}</span>
            <span>Microwave Repair</span>
          </div>
        </div>

        <div className={styles.faqs}>
          {poundCoins}
          <div className={styles.faqsText}>
            <b className={styles.faqQs}>
              How much will my appliance repair cost?
            </b>
            <br /> <br />
            <b>
              We charge a fixed price of £89 + parts (if required) for a
              completed repair. If you want same day/next day service it will be
              £129 + parts.
            </b>
            <br /> <br />
            <p>
              We attend to your address to diagnose the problem with the
              appliance. We will let you know if it needs any parts. For this,
              we will only charge you £49. If we repair the appliance then the
              total charge will only be £89 + parts. In case we need to visit
              more than once there will be no extra charge for that.
            </p>
          </div>
          {repairTools}
          <div className={styles.faqsText}>
            <b className={styles.faqQs}>
              What if you can&#39;t repair my appliance?
            </b>
            <br />
            <p>
              If your appliance is beyond economical repair, or if you are not
              happy with the cost of the parts, the callout charge is only £49.
              This covers our admin costs, the engineer&#39;s time, as well as
              travel costs.
            </p>
          </div>
          {faulty}
          <div className={styles.faqsText}>
            <b className={styles.faqQs}>
              What if my appliance goes wrong again?
            </b>
            <br />
            <p>
              If your appliance goes wrong again within one month of completion
              of our repair, and the fault is the same as the one we rectified,
              we will repair it back at no extra cost.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
