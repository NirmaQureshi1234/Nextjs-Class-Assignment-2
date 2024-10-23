import styles from "@/app/styles/Gallery.module.css";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2>Our Gallery</h2>
      <div className={styles.imageGrid}>
        <div className={styles.imageItem}>
          <Image
            src="/artest6.jpg"
            alt="Art Piece 1"
            width={500}
            height={400}
          />
        </div>
        <div className={styles.imageItem}>
          <Image
            src="/ars.jpg"
            alt="Art Piece 2"
            width={500}
            height={400}
          />
        </div>
        <div className={styles.imageItem}>
          <Image
            src="/artest3.jpg"
            alt="Art Piece 3"
            width={500}
            height={400}
          />
        </div>
        <div className={styles.imageItem}>
          <Image
            src="/artest4.jpg"
            alt="Art Piece 4"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
