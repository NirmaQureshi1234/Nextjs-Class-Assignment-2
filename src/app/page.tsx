import Image from "next/image";
import styles from "@/app/styles/Home.module.css";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <section className={styles.container}>
      <Hero />
      <div className={styles.services}>
        <div className={styles.serviceCard}>
          <Image
            className="object-cover object-center rounded mx-auto w-[200px] h-[100px]"
            alt="Painting Supplies"
            src="/art.jpg" // Replace with actual image path
            width={150}
            height={150}
          />
          <h3 className={styles.serviceTitle}>Painting Supplies</h3>
          <p className={styles.serviceDescription}>
            Explore high-quality paints and brushes for all your artistic needs.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <Image
            className="object-cover object-center rounded mx-auto w-[200px] h-[100px]"
            alt="Craft Kits"
            src="/craft.jpg" // Replace with actual image path
            width={150}
            height={150}
          />
          <h3 className={styles.serviceTitle}>Craft Kits</h3>
          <p className={styles.serviceDescription}>
            Discover complete kits to create beautiful crafts easily.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <Image
            className="object-cover object-center rounded mx-auto w-[200px] h-[100px]"
            alt="DIY Tools"
            src="/die.jpg" // Replace with actual image path
            width={150}
            height={150}
          />
          <h3 className={styles.serviceTitle}>DIY Tools</h3>
          <p className={styles.serviceDescription}>
            Find essential tools for your DIY projects and creations.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <Image
            className="object-cover object-center rounded mx-auto w-[200px] h-[100px]"
            alt="Art Workshops"
            src="/artest.jpg" // Replace with actual image path
            width={150}
            height={150}
          />
          <h3 className={styles.serviceTitle}>Art Workshops</h3>
          <p className={styles.serviceDescription}>
            Join our workshops to enhance your skills and meet fellow artists.
          </p>
        </div>
      </div>
      <p className={styles.cta}>
        Ready to create your masterpiece? <strong>Contact us today!</strong>
      </p>
      <h1>⭐🌙Created By NIRMA QURESHI</h1>
    </section>
  );
};

export default Home;
