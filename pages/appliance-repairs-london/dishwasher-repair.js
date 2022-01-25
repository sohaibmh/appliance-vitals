import Head from "next/head";
import styles from "../../styles/Home.module.css";
import RootComponent from "../../components/RootComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dishwasher Repair in London | Appliance Vitals Ltd</title>
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

      <main>
        <RootComponent dishwasherRepair="true" />
      </main>
    </div>
  );
}
