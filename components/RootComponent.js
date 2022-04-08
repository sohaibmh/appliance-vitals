import Link from "next/link";
import Image from "next/image";
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
import WashingMachineRepair from "./WashingMachineRepair";
import FridgeFreezerRepair from "./FridgeFreezerRepair";
import OvenRepair from "./OvenRepair";
import DishwasherRepair from "./DishwasherRepair";
import CookerRepair from "./CookerRepair";
import MicrowaveRepair from "./MicrowaveRepair";

export default function RootComponent({
  washingMachineRepair,
  fridgeFreezerRepair,
  ovenRepair,
  dishwasherRepair,
  cookerRepair,
  microwaveRepair,
}) {
  const mainSectionSvgs = () => {
    const svgs = [washingMachine, fridge, oven, dishwasher, cooker, microwave];

    return svgs.map((svg) => {
      return (
        <div key={`/${svg.props.id}`}>
          <Link href={`/${svg.props.route}`}>
            <span key={svg.props.id}>{svg}</span>
          </Link>
          <Link href={`/${svg.props.route}`}>
            <span>{svg.props.name}</span>
          </Link>
        </div>
      );
    });
  };

  const ratingLogo = (
    <Image
      src="/good-review.png"
      alt="Five Star Review"
      width={120}
      height={120}
      quality="100"
    />
  );

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Assuring fix to your appliance problem.</h1>
      <h2 className={styles.title2}>
        We repair all domestic electrical appliances, including washing
        machines, fridge freezers, ovens, dishwashers, cookers, and more.
        Available within 24 hours throughout London. You can book our service
        online, choosing your own date/time depending on your availability. Our
        engineer will visit your address and fix your appliance issue.
      </h2>

      <form action="https://appliancevitals.simplybook.it/v2/#book">
        <button type="submit" className={styles.bookNowButton}>
          BOOK NOW &nbsp; &#128342;
        </button>
      </form>

      <div className={styles.services}>
        {mainSectionSvgs()}
        {washingMachineRepair === "true" ? <WashingMachineRepair /> : null}
        {fridgeFreezerRepair === "true" ? <FridgeFreezerRepair /> : null}
        {ovenRepair === "true" ? <OvenRepair /> : null}
        {dishwasherRepair === "true" ? <DishwasherRepair /> : null}
        {cookerRepair === "true" ? <CookerRepair /> : null}
        {microwaveRepair === "true" ? <MicrowaveRepair /> : null}
      </div>
      <div className={styles.faqs}>
        {poundCoins}
        <div className={styles.faqsText}>
          <b className={styles.faqQs}>
            How much will my appliance repair cost?
          </b>
          <br /> <br />
          <b>
            We charge a fixed price of £79 + parts (if required) for a completed
            repair. If you want same day/next day service it will be £129 +
            parts.
          </b>
          <br /> <br />
          <p>
            We attend to your address to diagnose the problem with the
            appliance. We will let you know if it needs any parts. For this, we
            will only charge you £49 (or £79 if same/next day service). If we
            repair the appliance then the total charge will only be £79 + parts
            (or £129 + parts if same/next day service). In case we need to visit
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
            happy with the cost of the parts, the callout charge is only £49 (or
            £79 if same/next day service). This covers our admin costs, the
            engineer&#39;s time, as well as travel costs.
          </p>
        </div>
        {faulty}
        <div className={styles.faqsText}>
          <b className={styles.faqQs}>What if my appliance goes wrong again?</b>
          <br />
          <p>
            If your appliance goes wrong again within one month of completion of
            our repair, and the fault is the same as the one we rectified, we
            will repair it back at no extra cost.
          </p>
        </div>
      </div>
      <div className={styles.reviews}>
        <div className={styles.reviewsHeading}>
          <div className={styles.googleLogo}>
            <Image
              src="/google-logo.svg"
              alt="Google Logo"
              width={60}
              height={50}
              quality="100"
            />
          </div>
          <span className={styles.ourReviews}>
            <b>Our Reviews</b>
          </span>
        </div>

        <div className={styles.reviewsContent}>
          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>Shell Redmond</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;Appliance Vitals came into our office yesterday morning to
            sort our dishwasher. Would recommend anyone and we certainly will be
            keeping their details for the future. We have had dishwasher issues
            since the start of December so its such a relief to finally get it
            sorted. The price was by far the best and fairest I found when
            researching and to have everything sorted within 1 morning really
            was the icing on the cake.&rdquo;
          </span>

          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>Marcy Cox</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;Super efficient service - our electrician not only turned up
            on time, assessed the problem within minutes and returned at the
            earliest convenience with the part at no extra cost, but he also
            fixed my electric switch which had burned out and damaged the
            machine in the process. Top job and extremely nice to boot. Highly
            recommended.&rdquo;
          </span>

          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>Julie Cowell</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;They done a great job of Installation of the washing machine,
            Very quick Nice and polite gentle men. I am Very happy&rdquo;
          </span>

          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>Ellie X</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;Super professional - acted fast, precise, not a wrong move.
            A+&rdquo;
          </span>

          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>Daniel Lewis</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;Very courteous and professional. Excellent job done, would
            recommend.&rdquo;
          </span>

          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>L.A Guitars</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;Sohaib is a real pro and reassuring. Don't hesitate to call
            him.&rdquo;
          </span>

          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>J W</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;Sohaib arrived the next day within the two hour time slot,
            and was back two days later to fit the replacement part.&rdquo;
          </span>

          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>S Yung</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;Extremely happy with their service. Quick, courteous, and got
            the job done.&rdquo;
          </span>

          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>Richard Conway</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;Called them out to fix our Amana fridge freezer. Very
            professional, pleasant to deal with. Dismantled the machine and
            discovered the compressor was on its way out. This item was out of
            stock from the supplier, but at £500 it wasn't economical to repair.
            So they will only charge me the call-out charge and not the full
            repair charge. Very decent and honest. Will definitely use them
            again and will also recommend them happily.&rdquo;
          </span>

          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>Tom Mleko</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;Great service, very professional!&rdquo;
          </span>

          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>Maisie Breen</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;Really professional and prompt service. Easy to book at a
            time convenient to you and all costs clearly explained. Would use
            again and highly recommended&rdquo;
          </span>

          <div className={styles.ratings}>
            {ratingLogo}
            <p className={styles.reviewers}>
              <b>Simon Dalgleish</b>
            </p>
          </div>
          <span className={styles.review}>
            &ldquo;I just wanted to express my EXTREME satisfaction with the
            work carried out on my oven by your technician this morning.
            Firstly, I'd been amazed that I'd made the appointment online last
            night at around 8 and the technician came this morning at just after
            10!! He gave me an explanation of what had gone wrong with the oven
            and sorted it out. It's all working perfectly now. I can TOTALLY
            recommend Appliance Vitals for any repairs you might need to your
            domestic appliances.&rdquo;
          </span>
        </div>
      </div>
    </main>
  );
}
