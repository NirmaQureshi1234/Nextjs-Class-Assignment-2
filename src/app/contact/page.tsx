// components/Contact.tsx
import styles from "@/app/Styles/Contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.content}>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, feel free to reach out
          to us!
        </p>
        <p>
          Email: <a href="mailto:info@artandcraft.com">info@artandcraft.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src="/artesrt7.jpg"
          alt="Art and Craft"
          layout="responsive"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Contact;
