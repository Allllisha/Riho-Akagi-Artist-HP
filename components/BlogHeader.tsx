import Notes from "../public/notes.png";
import Image from "next/image";

export default  function BlogHeader(){
  return (
    <div className="rihoblog">
           <div className="notes">
      <Image src={Notes} alt=""
        width={`${1000}`}
        height={250}
       />
      </div>
      <h1>Concert Info</h1>
      <p>Riho Akagi Official</p>
    </div>
  )
}