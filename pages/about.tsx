import { client } from "../libs/client";
import Image from "next/image";
import styles from "../styles/about.module.scss";
import Link from "next/link";

export interface Profile {
  children?: React.ReactNode;
}

export default function Profile(abouts) {
  return (
    <div>
      {abouts.Profile_jp.map((about) => {
        return (
          <>
            <div className={styles.section}>
              <div className={styles.profile}></div>
            </div>
            <div className={styles.namebox}>
              <div className={styles.jpimage}>
                <Image
                  src={about.profile_photo.url}
                  alt=""
                  width={`${330}`}
                  height={330}
                />
              </div>
              <div className={styles.nametitle}>
                <div className={styles.pianist}>
                  <div className={styles.snellfont}>
                    <h2>Pianist</h2>
                  </div>
                  <div className={styles.namejp}>
                    <h1>{about.name}</h1>
                  </div>
                  <div className={styles.linkname}>
                  <Link
                    href="/abouts/h37pyymxj"
                    passHref
                  >
                   English
                  </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.aboutjp}>
              <p>{about.profile_jp}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "abouts" });

  return {
    props: {
      Profile_jp: data.contents,
    },
  };
};
