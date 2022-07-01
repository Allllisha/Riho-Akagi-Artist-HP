import { client } from "../../libs/client";
import Image from "next/image";
import moment from "moment";
import BlogHeader from "../../components/BlogHeader"
import Link from "next/link";


export default function BlogId({ blog }) {
  return (
    <div className="article">
    <BlogHeader></BlogHeader>
    <main>
    <div className="line"></div>
      <div className="blogdate">
        <p>{moment(blog.date).format("LLLL")}{" "}</p>
      </div>
      <div className="blogTittle">
      <h1>{blog.title}</h1>
      </div>
      <div className="blogCatch">
        <Image
         src={blog.eyecatch.url}
          alt=""
          width={`${800}`}
          height={500} />
      </div>
      <div className="blogContent">
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
      </div>
    </main>
    <div className="backToHome">
    <Link href={`/blogs/`}>
     <h6>Back to blogs</h6>
     </Link>
     </div>
    </div>
  );
}



export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content: any) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
