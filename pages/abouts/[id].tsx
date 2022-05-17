import { client } from "../../libs/client";
import Image from "next/image";



export default function ProfileId ({about}) {
  return (
    <>
      {console.log(about)}
           <div className="linebox">
            <div className="namebox">
              
              <div className="enimage">
              <Image
                  src={about.profile_photo.url}
                  alt=""
                  width={`${330}`}
                  height={330}
                />
              </div>
              <div className="nametitle">
                <div className="pianist">
                  <div className="snellfont">
                    <h2>Pianist</h2>
                  </div>
                  <div className="nameen">
                  <h1>{about.name_en}</h1>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="aboutjp">
              <p>{about.profile_en}</p>
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
