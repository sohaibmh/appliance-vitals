import React from "react";
import Image from "next/image";
import styles from "../../styles/blogs.module.css";

const HowToTroubleshootAndFixAWashingMachineThatWontDrain = () => (
  <div id="service" className={styles.blogContainer}>
    <h1 className={styles.blogTitle}>
      How to Troubleshoot and Fix a Washing Machine That Won&#39;t Drain
    </h1>
    <p>
      Are you dealing with a washing machine that just won&#39;t drain?
      You&#39;re not alone! A faulty washing machine can be incredibly
      frustrating, and it&#39;s essential to identify the issue and find the
      right solution quickly. In this blog post, we&#39;ll explore common
      reasons for washing machine drainage problems and guide you through
      potential DIY fixes. If the problem persists, you can always trust
      Appliance Vitals to provide the expert service you need. Book a repair
      with us at <a href="https://appliancevitals.com">appliancevitals.com</a>.
    </p>
    <h2 className={styles.blogSubtitle}>
      1. Check for blockages in the drain hose and filter
    </h2>
    <div className={styles.imageContainer}>
      <Image
        src="/washing-machine-filter.png"
        alt="Washing machine not draining"
        width={600}
        height={400}
        quality="100"
        className={styles.appliancePicServicePage}
      />
    </div>
    <p>
      One of the most common reasons for a washing machine not draining is a
      blocked drain hose or filter. It&#39;s not uncommon for small items like
      coins, hair, and lint to accumulate and obstruct the water flow.
    </p>
    <p className={styles.blogSubtitle}>
      To check for blockages, follow these steps:
    </p>
    <ol className={styles.orderedList}>
      <li>Turn off and unplug the washing machine.</li>
      <li>
        Locate the drain hose (usually at the back of the machine) and remove
        any visible debris.
      </li>
      <li>
        Detach the hose and inspect it for kinks or obstructions. If necessary,
        use a long brush or a straightened coat hanger to clear any blockages.
      </li>
      <li>
        Locate the filter (refer to your owner&#39;s manual), remove it, and
        clean any debris.
      </li>
    </ol>
    <div className={styles.imageContainer}>
      <Image
        src="/washing-machine-not-draining.jpg"
        alt="Washing machine not draining"
        width={800}
        height={400}
        quality="100"
        className={styles.appliancePicServicePage}
      />
    </div>
    <h2 className={styles.blogSubtitle}>2. Inspect the drain pump</h2>
    <p>
      A faulty or damaged drain pump could be another reason for poor drainage.
      To inspect the drain pump, you&#39;ll need to remove the back panel of
      your washing machine. If you&#39;re not comfortable with this, it&#39;s
      best to call a professional like Appliance Vitals.
    </p>
    <ol>
      <li>Unplug the washing machine and remove the back panel.</li>
      <li>
        Locate the drain pump (check your owner&#39;s manual) and inspect it for
        damage or debris.
      </li>
      <li>
        If the pump is damaged or clogged, you may need to replace it or consult
        a professional.
      </li>
    </ol>
    <h2 className={styles.blogSubtitle}>3. Examine the belts and pulleys</h2>
    <p>
      In some washing machines, belts and pulleys control the drain pump. If
      they&#39;re worn or broken, the machine may not drain properly. Here&#39;s
      how to check them:
    </p>
    <ol>
      <li>Unplug the washing machine and remove the back panel.</li>
      <li>Locate the belts and pulleys and inspect for damage or wear.</li>
      <li>If needed, replace the damaged parts or consult a professional.</li>
    </ol>
    <h2 className={styles.blogSubtitle}>
      4. Assess the lid switch or door lock
    </h2>
    <p>
      Most washing machines are designed to stop draining if the lid or door
      isn&#39;t securely closed. If the lid switch or door lock is faulty, the
      machine may not drain. To check this:
    </p>
    <ol>
      <li>Inspect the lid switch or door lock for damage or wear.</li>
      <li>If needed, replace the faulty part or consult a professional.</li>
    </ol>
    <div className={styles.imageContainer}>
      <Image
        src="/washing-machine-door-lock.webp"
        alt="Washing machine not draining"
        width={700}
        height={400}
        quality="100"
        className={styles.appliancePicServicePage}
      />
    </div>
    <h2 className={styles.blogSubtitle}>Conclusion:</h2>
    <p>
      If you&#39;ve tried these DIY solutions and your washing machine still
      isn&#39;t draining, it&#39;s time to call in the experts. Appliance Vitals
      is here to help Londoners with their washing machine repair needs. Book a
      repair with us at{" "}
      <a href="https://appliancevitals.com">appliancevitals.com</a> and get your
      washing machine back in working order.
    </p>{" "}
  </div>
);

export default HowToTroubleshootAndFixAWashingMachineThatWontDrain;
