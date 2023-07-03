import Head from "next/head";
import Arrow from "../public/arrow.png";
import TOP from "../public/home_top.png";
import Riho from "../public/riho.jpg";
import RED from "../public/reddeco.png";
import BLACK from "../public/blackdeco.png";
import Flower from "../public/1.png";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { client } from "../libs/client";
import Link from "next/link";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";

import { Link as Scroll } from "react-scroll";

export default function Home(upcommings) {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <Head>
          <title>Pianist Riho Akagi Homepage</title>
          <meta name="description" content="Riho Akagi Pianist" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.hero}>
          <Image src={TOP} 
          alt=""
           />
        </div>
      </div>

      <div className={styles.upcomming}>
      <p>Upcomming</p>
            <Image src={BLACK} 
          alt=""
           />
          <div className={styles.blogContainer}>
            {upcommings.upcommings.map((upcomming: any) => {
              return (
                <div key={upcomming.id}>
                  <div className={styles.bloglist}>
                    {moment(upcomming.date).format("LL")}{" "}
                    <Link href={`/upcommings/${upcomming.id}`}>{upcomming.title}</Link>
                  </div>
                </div>
                
              );
            })}
          </div>
      </div>

          <div className={styles.lesson}>
            <p>Lesson</p>
            <Image src={RED} 
          alt=""
           />
          <div className={styles.lesson_explain_a}>
           <p>年齢問わず、子供から大人までピアノを弾くことは楽しい！面白い！そんな経験をしてみませんか？ロンドンで学んだ私のピアノ音楽を、皆さん一人一人の個性を見つけ活かしながら、楽しく元気にレッスンをすすめていきます。一緒に素敵な音楽をつくっていきましょう！詳しくは Contact へお気軽にお問い合わせください。お待ちしてます！</p>
           </div>
           <div className={styles.lesson_explain_b}>
            <p>受講対象者</p>
            <p>・キーボードまたはピアノが家にある方</p>
            <p>・ピアノが弾ける環境がある方</p>
           </div>
           <div className={styles.lesson_explain_c}>
            <p>内容</p>
            <p>プライベートレッスン、オンラインレッスン★、</p>
            <p>アドバイスレッスン、コンサート、伴奏録音、伴奏依頼、現地留学等</p>
          </div>
          <div className={styles.lesson_explain_d}>
            <p>★オンラインレッスンを希望させる方は日本語、英語どちらでも可能です。現地ロンドンから、または帰国中は静岡県から接続します。</p>
          </div>

          </div>


      {/* <div className={styles.slantbg}>
        <div className={styles.news}>
          <h1>News</h1>
          <h6>concert info</h6>

          <div className={styles.blogContainer}>
            {blogs.blogs.map((blog: any) => {
              return (
                <div key={blog.id}>
                  <div className={styles.bloglist}>
                    {moment(blog.date).format("LL")}{" "}
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                  </div>
                </div>
                
              );
            })}
          </div>
        </div>
      </div> */}

      {/* <div className={styles.contactContainer}>
        <div className={styles.contact}>
          <h1>Contact</h1>
          <h6>Lesson / Enquiry</h6>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactA}>

            <div className={styles.info}>
            <div className="fluid">
              <p>
              コロナ禍で大変な今ですが、ピアノを弾いてひとつ楽しみを増やしませんか？楽しむことを第一にイギリスはロンドンで学んだ1人1人の個性を活かす音楽をシェアさせていただきます。
              この度、オンラインレッスンを開講します。日本語、英語どちらとも可能です。
              また、歌曲などの伴奏録音も承ります。
              ※オンラインレッスンはキーボードまたはピアノがお家にある方/ピアノのある環境ができる方のみ受講可能とさせて頂きます。
              詳しい詳細についてはお問い合わせ下さい。
              私のオンライン接続先は静岡県(日本)またはロンドン(イギリス)になります。
              I would like to announce the offer of virtual piano lessons and
              piano accompaniment recordings !! you can take a lesson any time
              as you want at home! I connect from in Shizuoka(Japan) /
              London(UK) Please feel free to contact me anytime !!
              contactrihoakagi@gmail.com
              </p>
              </div>
            </div>
          </div>
          <div className={styles.contactB}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <div className="commentForm">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control type="text" placeholder="comments" />
                </Form.Group>
              </div>
              <Button variant="primary" type="submit" id="btn-red">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "upcommings" });

  return {
    props: {
      upcommings: data.contents,
    },
  };
};
