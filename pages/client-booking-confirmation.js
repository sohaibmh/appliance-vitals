import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Booking Confirmation | Appliance Vitals Ltd</title>
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
        <div className={styles.bookingConfirmation}>
          Thank you for booking your repair service with us.
          <br />
          <br />
          Your booking is confirmed. You will receive a confirmation email
          shortly.
          <br />
          <br />
          Note: if you have chosen the &#8220;Pay Later&#8221; option during
          checkout, you will be asked to pay by cash or through online transfer
          to our bank account when the engineer attends to your address.
        </div>
      </main>
    </div>
  );
}
