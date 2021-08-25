import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Appliances repair service in London | Appliance Vitals Ltd
        </title>
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
      <header className={styles.header}>
        <span className={styles.logo}>
          <Image
            src="/logo-transparent-168-min.png"
            alt="Appliance Vitals Logo"
            width={147.6}
            height={91.4}
            quality="100"
          />
        </span>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Assuring fix to your appliance problem.
        </h1>
        <h2 className={styles.title2}>
          We repair all domestic electrical appliances, including washing
          machine, fridge freezer, oven, dishwasher, cooker, and more.
        </h2>

        <div className={styles.services}>
          x<div>Washing Machine Repair</div>
          <div>Fridge Freezer Repair</div>
          <div>Oven Repair</div>
          <div>Dishwasher Repair</div>
          <div>Cooker Repair</div>
          <div>Microwave Repair</div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
