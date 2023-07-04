import { client } from "../libs/client";
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios'
import BLUE from "../public/bluedeco.png";





export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = ({
      email,
      name,
      message,
    });
   
    await axios.post('https://rihoakagi.microcms.io/api/v1/contact', postData, {
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
      },
    })

    console.log({
      email,
      name,
      message,
    });
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };



  return (
    <>
    <div className="ContactContainer">
    <div className="ContactTop">
        <h2>Contact</h2>
        <Image src={BLUE} 
          alt=""
           />
      </div>
       <div className="ContactForm">
      <form onSubmit={handleSubmit}>
        <div className="ContactName">
        <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={handleChangeName}
            type="name"
          />
        </div>
        <div className="ContactEmail">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="ContactMessage">
          <textarea
           name="message" 
           id="message"
           value={message}
           onChange={handleChangeMessage}
           >
          </textarea>
        </div>
        <div className="ContactButton">
          <button type="submit"><a href=""><p>Submit</p></a></button>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}








// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "contact" });

//   return {
//     props: {
//       contact: data.contents,
//     },
//   };
// };
