import Head from "next/head";
import Arrow from "../public/arrow.png";
import Riho from "../public/riho.jpg";
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

export default function Home(blogs) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Pianist Riho Akagi Homepage</title>
          <meta name="description" content="Riho Akagi Pianist" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.hero}>
          <div className={styles.slider}>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
            <div className={styles.boxString}>
              <div className={styles.indexName}>
                <h3>Pianist</h3>
                <div className={styles.indexAllName}>
                  <div className={styles.firstname}>
                    <h1>Riho</h1>
                  </div>
                  <div className={styles.lastname}>
                    <h1>Akagi</h1>
                  </div>
                </div>
                <div className={styles.blink}>
                  <Scroll to="concept">
                    <Image src={Arrow} alt="" />
                  </Scroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.welcome} id="concept">
        <div className={styles.introduction}>
          <h1>About</h1>
          <h6>My introduction</h6>
          <div className={styles.allabout}>
              <Image src={Riho} alt="" />
            <div className={styles.allintro}>
              <p>
                Hello! Welcome and Thank you very much for stopping by
                my hp! I think you already know about my musical life. In this
                page, I would like to share my hobbies, interests and lifestyle
                about myself...I have been living in London since 2017. I have
                been thinking more about myself in the last few years and that
                was a big theme. I would like to write down someday.and how I
                did change a life....anyway hope you enjoy this hp!! Have a lovely
                day !! Aloha!☀️ 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slantbg}>
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
      </div>
      <div className={styles.contactContainer}>
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
      </div>
      <Image src={Flower} alt="" />
    </>
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
