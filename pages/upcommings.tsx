import { client } from "../libs/client";
import Link from "next/link";
import moment from "moment";
import BlogHeader from "../components/BlogHeader";
import Image from "next/image";
import RED from "../public/reddeco.png";

export default function AllBlogs(upcommings) {
  return (
    <div className="bg-news">
      <div className="gallery__top"><h2>Gallary</h2>
      <Image src={RED} 
          alt=""
           />
      </div>
      <div className="allimages-container">
        {upcommings.upcommings.map((upcomming: any) => {
          console.log(upcommings)
          return (
            <>
              <div key={upcomming.id} className="allimages">
                <Link href={`/upcommings/${upcomming.id}`}>
                  <div className="sample1">
                    <Image
                      src={upcomming.eyecatch.url}
                      alt=""
                      width={300}
                      height={300}
                    />
                    <div className="mask">
                      <div className="caption">
                        {moment(upcomming.date).format("LL")}{" "}
                        <p>{upcomming.title}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "upcommings" });
   console.log(data);
  return {
    props: {
      upcommings: data.contents,
    },
  };
};
