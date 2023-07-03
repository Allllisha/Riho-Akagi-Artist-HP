import { client } from "../../libs/client";
import Image from "next/image";
import moment from "moment";
import BlogHeader from "../../components/BlogHeader"
import Link from "next/link";
import RED from "../../public/reddeco.png";


export default function BlogId({ upcomming }) {
  return (
    <>
    <div className="article bg-news2">
    <BlogHeader></BlogHeader>
    <main>

    <div className="line"></div>
      <div className="blogdate">
        <p>{moment(upcomming.date).format("LLLL")}{" "}</p>
      </div>
      <div className="blogTittle">
      <h1>{upcomming.title}</h1>
      <Image src={RED} 
          alt=""
           />
      </div>
      <div className="blogCatch">
        <Image
         src={upcomming.eyecatch.url}
          alt=""
          width={`${800}`}
          height={500} />
      </div>
      <div className="blogContent">
      <div
        dangerouslySetInnerHTML={{
          __html: `${upcomming.content}`,
        }}
      />
      </div>
    <div className="backToHome">
    <Link href={`/upcommings/`}>
     <h6>Back to Gallary</h6>
     </Link>


     </div>
     </main>
    </div>
    </>
  );
}



export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "upcommings" });

  const paths = data.contents.map((content: any) => `/upcommings/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "upcommings", contentId: id });

  return {
    props: {
      upcomming: data,
    },
  };
};
