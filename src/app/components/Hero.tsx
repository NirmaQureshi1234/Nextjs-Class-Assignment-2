import styles from "@/app/Styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Art & Craft</h1>
        <p>
          Unleash your creativity with our curated collection of art and craft
          materials.
        </p>
      </div>
    </section>
  );
};

export default Hero;
