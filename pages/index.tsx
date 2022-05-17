import Head from 'next/head'

import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pianist Riho Akagi Homepage</title>
        <meta name="description" content="Riho Akagi Pianist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Riho Akagi</p>
    </div>
  )
}
