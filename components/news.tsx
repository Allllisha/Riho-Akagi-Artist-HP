import { client } from "../libs/client";
import Link from "next/link";

export default function News({ upcommings}){
  return (
    <div>
      {upcommings.map((upcomming: any)=>{
       return(
         <div key={upcomming.id}>
           <Link href={`/upcommings/${upcomming.id}`}>{upcomming.title}</Link>
         </div>
       )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "upcommings" });

  return {
    props: {
      upcommings: data.contents,
    },
  };
};