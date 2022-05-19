import { client } from "../libs/client";
import Image from "next/image";
import styles from "../styles/about.module.scss";
import Link from "next/link";

export interface Profile {
  children?: React.ReactNode;
  Profile_jp: string[]
  profile_photo?: string,
}

export interface Info {
  profile_photo2: string;
  name: string;
  profile_jp: string;
}


export default function Profile(abouts: Profile) {
  return (
    <div>
      {abouts.Profile_jp.map((about: Info) => {
        return (
          <>
          <div className={styles.linebox}>
            <div className={styles.namebox}>
              <div className={styles.jpimage}>
                <Image
                  src={about.profile_photo2.url}
                  alt=""
                  width={`${300}`}
                  height={400}
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
                  </div>
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
