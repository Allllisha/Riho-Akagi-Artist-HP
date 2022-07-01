import { client } from "../libs/client";
import Link from "next/link";
import moment from "moment";
import BlogHeader from "../components/BlogHeader";
import Image from "next/image";

export default function AllBlogs(blogs) {
  return (
    <div>
      <BlogHeader></BlogHeader>
      <div className="line"></div>
      <div className="allimages-container">
        {blogs.blogs.map((blog: any) => {
          return (
            <>
              <div key={blog.id} className="allimages">
                <Link href={`/blogs/${blog.id}`}>
                  <div className="sample1">
                    <Image
                      src={blog.eyecatch.url}
                      alt=""
                      width={300}
                      height={300}
                    />
                    <div className="mask">
                      <div className="caption">
                        {moment(blog.date).format("LL")}{" "}
                        <p>{blog.title}</p>
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
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
