import Head from "next/head";
import styles from "../styles/Home.module.css";
import RootComponent from "../components/RootComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Appliance Repair Service in London | Appliance Vitals Ltd</title>
        <script
          type="application/ld+json"
          data-script-src="true"
          dangerouslySetInnerHTML={{
            __html: ` { "@context":"https://schema.org", "@type":"LocalBusiness", "name": "Appliance Vitals London", "url": "https://www.appliancevitals.com/", "image": "https://www.appliancevitals.com/_next/image?url=%2Fmiele-washing-machine.webp&w=1920&q=100", "logo": "https://www.appliancevitals.com/_next/image?url=%2Flogo-transparent-168-min.png&w=256&q=100", "priceRange": "££", "paymentAccepted": "Credit Card, Debit Card, Invoice", "currenciesAccepted":"gbp", "openingHours":"Mo-Su 7am-7pm", "telephone":"+7429184409", "address": { "@type": "PostalAddress", "addressLocality": "Central London", "addressRegion": "London", "postalCode": "EN4 8PH" }, "contactPoint": [{ "@type" : "ContactPoint", "telephone": "+7429184409", "contactType": "Customer Service" }], "aggregateRating": { "@type":"AggregateRating", "ratingValue": 5.0, "ratingCount": 18 } } `,
          }}
        ></script>
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
      <RootComponent />
    </div>
  );
}
