import Head from "next/head";
import Arrow from "../public/arrow.png";
import Riho from "../public/riho.jpg";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { client } from "../libs/client";
import Link from "next/link";

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
            <div>
              <Image src={Riho} alt="" />
            </div>
            <div className={styles.allintro}>
              <p>
                Hello! Aloha!☀️ Welcome and Thank you very much for stopping by
                my hp! I think you already know about my musical life. In this
                page, I would like to share my hobbies, interests and lifestyle
                about myself...I have been living in London since 2017. I have
                been thinking more about myself in the last few years and that
                was a big theme. I would like to write down someday.and how I
                did change a life....anyway hope you enjoy this hp!! Have a nice
                day !!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.newsContainer}>
        <div className={styles.news}>
          <h1>News</h1>
          <h6>concert info / blogs</h6>

          <div className={styles.blogContainer}>
            {blogs.blogs.map((blog: any) => {
              return (
                <div key={blog.id}>
                  <div className={styles.bloglist}>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
