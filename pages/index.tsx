import Head from "next/head";
import TOP from "../public/home_top.png";
import TOP2 from "../public/home_top2.png";
import RED from "../public/reddeco.png";
import BLACK from "../public/blackdeco.png";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { client } from "../libs/client";
import Link from "next/link";
import moment from "moment";
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
        <div className={styles.hero2}>
          <Image src={TOP2} 
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
           <p>年齢問わず、子供から大人までピアノを弾くことは楽しい！面白い！そんな経験をしてみませんか？ロンドンで学んだ私のピアノ音楽を、皆さん一人一人の個性を見つけ活かしながら、楽しく元気にレッスンをすすめていきます。一緒に素敵な音楽をつくっていきましょう！詳しくは <Link href={`/contact`}>Contact</Link> へお気軽にお問い合わせください。お待ちしてます！</p>
           </div>
           <div className={styles.lesson_explain_b}>
            <p>受講対象者</p>
            <p>・キーボードまたはピアノが家にある方</p>
            <p>・ピアノが弾ける環境がある方</p>
           </div>
           <div className={styles.lesson_explain_c}>
            <p>内容</p>
            <p>プライベートレッスン、オンラインレッスン★、</p>
            <p>アドバイスレッスン、コンサート、伴奏録音、伴奏依頼、留学等</p>
          </div>
          <div className={styles.lesson_explain_d}>
            <p>★オンラインレッスンを希望させる方は日本語、英語どちらでも可能です。現地ロンドンから、または帰国中は静岡県から接続します。</p>
          </div>
          <div className={styles.lesson_explain_e}>
            <p>The piano is fun for all ages! From children to adults, anyone can enjoy playing the piano! Why not experience the joy of playing the piano for yourself?</p>
          </div>
          <div className={styles.lesson_explain_f}>
            <p>I teach piano in a fun and lively way using the methods I have learnt in London and Japan while finding and catering my lessons to each student’s individuality. Let’s make wonderful music together!</p>
          </div>
          <div className={styles.lesson_explain_g}>
            <p>For further information, please feel free to <Link href={`/contact`}>contact</Link> me. I look forward to hearing from you!</p>
          </div>
          <div className={styles.lesson_explain_h}>
            <p>〈Who would these lessons be good for?〉</p>
          </div>
          <div className={styles.lesson_explain_I}>
            <p>Those who have an electric keyboard, piano at home, or somewhere they can play a piano.</p>
          </div>
          <div className={styles.lesson_explain_J}>
            <p>〈Types of Lessons and Services Offered〉</p>
          </div>
          <div className={styles.lesson_explain_K}>
            <p>Private Lessons, Theory, Online Lessons(★), Advisory Lessons, Concerts, Accompaniment Recording, Collaborative/Accompaniment Commission, Study Abroad Consultation etc.</p>
          </div>
          <div className={styles.lesson_explain_L}>
            <p>(★) For those interested in online lessons, they can be taught in either Japanese or English. Lessons will be conducted from London, UK or Shizuoka, Japan.</p>
          </div>
          <div className={styles.lesson_explain_M}>
            <p>Each lesson is personalized according to the level of the student, from beginner to professional, and taught in my own style while also incorporating ABRSM and Japanese methodologies.</p>
          </div>
          </div> 
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
