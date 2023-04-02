import React from "react";
import Image from "next/image";
import styles from "../../styles/blogs.module.css";

const TroubleshootingWashingMachineLeakingProblems = () => (
  <div id="service" className={styles.blogContainer}>
    <h1 className={styles.blogTitle}>
      Troubleshooting Washing Machine Leaking Problems
    </h1>
    <p>
      A leaking washing machine can be both frustrating and concerning. Not only
      can it lead to potential water damage, but it can also be a sign of a more
      serious underlying problem with your appliance. In this blog, we&#39;ll
      explore the common causes of washing machine leaks and provide expert tips
      on how to resolve them. And remember, if you need professional help, you
      can always book a service with Appliance Vitals at{" "}
      <a href="https://appliancevitals.com">appliancevitals.com</a>.
    </p>
    <h2 className={styles.blogSubtitle}>Identifying the Source of the Leak </h2>
    <p>
      Before diving into solutions, it&#39;s crucial to identify where the leak
      is coming from. Common sources of leaks include:
    </p>{" "}
    <ol>
      <li>Hoses and connections</li>
      <li>Door or lid seal</li>
      <li>Detergent dispenser</li>
      <li>Cracked or Damaged Drum</li>
      <li>Drain pump or filter</li>
    </ol>
    <h2 className={styles.blogSubtitle}>1. Hoses and Connections</h2>
    <p>
      Leaks from hoses and connections are often the easiest to spot and fix.
      Check the following:
    </p>
    <ol>
      <li>
        Ensure that the water inlet hose is properly connected and tightened.
      </li>
      <li>
        Examine the hose for signs of wear, cracks, or damage. If you find any,
        replace the hose.
      </li>
      <li>
        Inspect the drain hose for proper installation and potential clogs.
        Ensure it&#39;s securely connected to the washer and the drain pipe.
      </li>{" "}
    </ol>
    <div className={styles.imageContainer}>
      <Image
        src="/pipe-leakage.jpg"
        alt="Washing machine pipe leakage"
        width={300}
        height={200}
        quality="100"
        className={styles.appliancePicServicePage}
      />
    </div>
    <br></br>
    <h2 className={styles.blogSubtitle}>2. Door or Lid Seal</h2>
    <p>
      A damaged or worn-out door or lid seal can allow water to seep out during
      the wash cycle. Here&#39;s how to address this issue:
    </p>
    <ol>
      <li>
        Clean the seal thoroughly, removing any debris or build-up that could
        prevent proper sealing.
      </li>
      <li>
        Check for tears, cracks, or damage on the seal. If found, replace the
        seal to prevent further leaks.
      </li>
    </ol>
    <div className={styles.imageContainer}>
      <Image
        src="/washing-machine-door-seal-damage.jpg"
        alt="Damaged washing machine door seal"
        width={450}
        height={300}
        quality="100"
        className={styles.appliancePicServicePage}
      />
    </div>
    <h2 className={styles.blogSubtitle}>3. Detergent Dispenser </h2>
    <p>
      Leaks from the detergent dispenser can be caused by using the wrong type
      or amount of detergent. To fix this:
    </p>
    <ol>
      <li>
        Ensure you&#39;re using high-efficiency (HE) detergent for HE machines.
      </li>
      <li>
        Follow the detergent manufacturer&#39;s recommended dosage, as using too
        much can cause overflow.
      </li>
    </ol>
    <div className={styles.imageContainer}>
      <Image
        src="/washing-machine-detergent-dispenser.jpg"
        alt="Washing machine detergent dispenser"
        width={300}
        height={200}
        quality="100"
        className={styles.appliancePicServicePage}
      />
    </div>
    <h2 className={styles.blogSubtitle}>4. Cracked or Damaged Drum:</h2>
    <p>
      A cracked or damaged drum can cause water leaks. This issue typically
      requires professional help, and in most cases the machine will need to be
      replaced as the cost of the repair could be more than a new machine. If
      you suspect a damaged drum, schedule a service with Appliance Vitals at{" "}
      <a href="https://appliancevitals.com">appliancevitals.com</a> to get
      further advice regarding the repair or replacement of the machine.
    </p>{" "}
    <div className={styles.imageContainer}>
      <Image
        src="/washing-machine-leakage.jpg"
        alt="Washing machine leakage"
        width={350}
        height={250}
        quality="100"
        className={styles.appliancePicServicePage}
      />
    </div>
    <h2 className={styles.blogSubtitle}>5. Drain Pump or Filter</h2>
    <p>
      A faulty drain pump or clogged filter can lead to water leaks. Here&#39;s
      how to troubleshoot these components:
    </p>{" "}
    <ol>
      <li>
        Inspect the drain pump for signs of damage or cracks. If necessary,
        replace the pump.
      </li>
      <li>
        Clean the filter regularly to prevent clogs and ensure proper drainage.
      </li>
    </ol>
    <div className={styles.imageContainer}>
      <Image
        src="/washing-machine-drain-pump.jpg"
        alt="Washing machine drain pump leakage"
        width={350}
        height={250}
        quality="100"
        className={styles.appliancePicServicePage}
      />
    </div>
    <h2 className={styles.blogSubtitle}>
      Get Professional Help with Appliance Vitals
    </h2>
    <p>
      If you&#39;re unable to resolve your washing machine leakage problem or
      need professional assistance, don&#39;t hesitate to contact Appliance
      Vitals. Our expert technicians can diagnose and repair your appliance
      promptly and efficiently. Book a service with us at
      <a href="https://appliancevitals.com">appliancevitals.com</a>
    </p>
  </div>
);

export default TroubleshootingWashingMachineLeakingProblems;
