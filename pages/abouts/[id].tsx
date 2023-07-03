import { client } from "../../libs/client";
import Image from "next/image";
import moment from "moment";
import London from "../../public/london.png";
import styles from "../../styles/about.module.scss";


export default function ProfileId ({about}) {
  return (
    <>
      {console.log(about)}
      <div className={styles.profile_section}>
          <div className={styles.lineboxen}>
            <div className={styles.namebox}>
              <div className={styles.jpimage}>
                <Image
                  src={about.profile_photo4.url}
                  alt=""
                  width={`${246}`}
                  height={294}
                />
              </div>
              <div className={styles.nametitle}>
                <div className={styles.pianist}>
                  <div className={styles.nameen}>
                    <h1>Hello!</h1>
                    <h1>I am</h1>
                    <h1>Riho Akagi</h1>
                  </div>
                  <div className={styles.linkname}>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className={styles.profile_deco}>
                <Image
                  src={about.red_deco.url}
                  alt=""
                  width={`${83}`}
                  height={30}
                />
                </div>
            <div className={styles.aboutjp}>
              <p>{about.profile_en}</p>
            </div>
            </div> 
            
 
    </>
  );
}





export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "abouts" });

  const paths = data.contents.map((content) => `/abouts/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "abouts", contentId: id });

  return {
    props: {
      about: data,
    },
  };
};
