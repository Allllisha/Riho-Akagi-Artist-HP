import { client } from "../libs/client";
import Image from "next/image";
import styles from "../styles/about.module.scss";
import Link from "next/link";
import Sakura from "../public/sakurajp.png";

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
    <div className={styles.profile_section}>
      {abouts.Profile_jp.map((about: any) => {
        return (
          <>
          <div className={styles.profile_section}>
          <div className={styles.linebox}>
            <div className={styles.namebox}>
              <div className={styles.jpimage}>
                <Image
                  src={about.profile_photo3.url}
                  alt=""
                  width={`${246}`}
                  height={294}
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
            <div className={styles.profile_deco}>
                <Image
                  src={about.blue_deco.url}
                  alt=""
                  width={`${83}`}
                  height={30}
                />
                </div>
            <div className={styles.aboutjp}>
              <p>{about.profile_jp}</p>
            </div>
            <div className={styles.aboutZayuu}>
              <p>{about.zayuu}</p>
            </div>
            <div className={styles.aboutSukinakoto}>
              <p>{about.sukinakoto}</p>
            </div>
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
