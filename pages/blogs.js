import Head from "next/head";
import styles from "../styles/Home.module.css";
import Blogs from "../components/Blogs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dishwasher Repair in London | Fixing Any Make & Model</title>
        <script
          type="application/ld+json"
          data-script-src="true"
          dangerouslySetInnerHTML={{
            __html: ` { "@context":"https://schema.org", "@type":"LocalBusiness", "name": "Appliance Vitals London", "url": "https://www.appliancevitals.com/", "image": "https://www.appliancevitals.com/_next/image?url=%2Fmiele-washing-machine.webp&w=1920&q=100", "logo": "https://www.appliancevitals.com/_next/image?url=%2Flogo-transparent-168-min.png&w=256&q=100", "priceRange": "££", "paymentAccepted": "Credit Card, Debit Card, Invoice", "currenciesAccepted":"gbp", "openingHours":"Mo-Su 7am-7pm", "telephone":"+7429184409", "address": { "@type": "PostalAddress", "addressLocality": "Central London", "addressRegion": "London", "postalCode": "EN4 8PH" }, "contactPoint": [{ "@type" : "ContactPoint", "telephone": "+7429184409", "contactType": "Customer Service" }], "aggregateRating": { "@type":"AggregateRating", "ratingValue": 5.0, "ratingCount": 18 } } `,
          }}
        ></script>
        <script
          type="application/ld+json"
          data-script-src="true"
          dangerouslySetInnerHTML={{
            __html: `
            { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.appliancevitals.com/" },{ "@type": "ListItem", "position": 2, "name": "Washing Machine Repair", "item": "https://www.appliancevitals.com/appliance-repairs-london/washing-machine-repair" }] }
            `,
          }}
        ></script>
        <script
          type="application/ld+json"
          data-script-src="true"
          dangerouslySetInnerHTML={{
            __html: `
            { "@context": "http://schema.org/", "@type": "Product", "name": "Washing Machine And Washer Dryer Repairs", "category": "Appliance Repair", "description": "Book washing machine repairs near you &amp; enjoy next-day appointments. Stop your broken washing machine from creating an avalanche of untidy clothing.", "url": "https://www.appliancevitals.com/appliance-repairs-london/washing-machine-repair", "image": "https://www.appliancevitals.com/_next/image?url=%2Fmiele-washing-machine.webp&w=1920&q=100", "offers": { "@type": "AggregateOffer", "url": "Washing Machine And Washer Dryer Repairs", "highPrice": "129", "lowPrice": "79", "priceCurrency": "GBP", "offerCount": "100"}, "brand": { "@type": "Brand", "name": "Appliance Vitals" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": 5.0, "ratingCount": 18, "bestRating": "5", "worstRating": "5" }
          }            `,
          }}
        ></script>
        <script
          type="application/ld+json"
          data-script-src="true"
          dangerouslySetInnerHTML={{
            __html: `
            { "@context": "https://schema.org", "@type": "Service", "serviceType": "Washing Machine And Washer Dryer Repairs", "name": "Washing Machine And Washer Dryer Repairs", "providerMobility": "dynamic", "areaServed": { "@type": "Place", "name": "London" }, "image": "https://www.appliancevitals.com/_next/image?url=%2Fmiele-washing-machine.webp&w=1920&q=100", "sameAs": [ ], "url": "https://www.appliancevitals.com/appliance-repairs-london/washing-machine-repair", "description": "Book washing machine repairs near you &amp; enjoy next-day appointments. Stop your broken washing machine from creating an avalanche of untidy clothing.", "category": "Appliance Repair", "provider": { "@type": "Organization", "name": "Appliance Vitals", "url": "https://www.appliancevitals.com/", "email":"admin@appliancevitals.com", "telephone":"07429184409", "logo": "https://www.appliancevitals.com/_next/image?url=%2Flogo-transparent-168-min.png&w=256&q=100", "image": "https://www.appliancevitals.com/_next/image?url=%2Fmiele-washing-machine.webp&w=1920&q=100", "sameAs": ["https://www.yell.com/biz/appliance-vitals-barnet-10277539/" ], "foundingDate": "2021", "foundingLocation": "London", "founders": [ { "@type": "Person", "name": "Sohaib Mubashir" }, { "@type": "Person", "name": "Sebastien Allouche" } ], "address": { "@type": "PostalAddress", "streetAddress": "Church Hill Road", "addressLocality": "Central London", "addressRegion": "Greater London", "postalCode": "EN4 8PH", "addressCountry": "UK" } }
          }`,
          }}
        ></script>
        <script
          type="application/ld+json"
          data-script-src="true"
          dangerouslySetInnerHTML={{
            __html: `
            { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "My appliance just broke down – now what?", "acceptedAnswer": { "@type": "Answer", "text": "Check for any external changes that may have affected its performance (disconnected power supply/water supply, etc.). If none are found, look for leaks around the machine or holes in the door seal. If you cannot identify the issue, disconnect the appliance and contact a technician." } } , { "@type": "Question", "name": "When can the washer repair technician arrive?", "acceptedAnswer": { "@type": "Answer", "text": "Same-day and weekend appointments are readily available with a 2-hours arrival time frame. How much time the service will take will depend on several factors, such as the nature of the problem and the type of part that needs to be replaced (a second visit is required to install additionally ordered parts)." } } , { "@type": "Question", "name": "Can you guarantee that your repairs will last?", "acceptedAnswer": { "@type": "Answer", "text": "For your peace of mind, all appliance repair services come with a 1-month guarantee period that covers the labour and all replacement parts provided by your dedicated professional." } } , { "@type": "Question", "name": "Which areas in London do you service?", "acceptedAnswer": { "@type": "Answer", "text": "The service provider currently services all areas within London." } } ] }`,
          }}
        ></script>
        <meta charSet="UTF-8"></meta>
        <meta
          name="description"
          content="Book dishwasher repairs in London & enjoy same/next day appointments. Dishwasher repairs done on the spot."
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
        <Blogs dishwasherRepair="true" />
      </main>
    </div>
  );
}
