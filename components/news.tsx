import { client } from "../libs/client";
import Link from "next/link";

export default function News({ blogs }){
  return (
    <div>
      {blogs.map((blog: any)=>{
       return(
         <div key={blog.id}>
           <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
         </div>
       )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};