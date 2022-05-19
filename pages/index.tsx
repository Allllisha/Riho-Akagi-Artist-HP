import Head from "next/head";
import Arrow from "../public/arrow.png"
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pianist Riho Akagi Homepage</title>
        <meta name="description" content="Riho Akagi Pianist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero}>
        <div className={styles.slider}>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.boxString}>
            <div className={styles.indexName}>
               <h3>Pianist</h3>
              <div className={styles.indexAllName}>
              <div className={styles.firstname}>
            <h1>Riho</h1>
            </div>
            <div className={styles.lastname}>
            <h1>Akagi</h1>
            </div>
            </div>
            <div className={styles.blink}>
           <Image src={Arrow} alt="" />
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
