import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>효영,소미의 결혼식에 초대합니다</title>
        <meta name="description" content="모바일 청첩장" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Wedding_Logo.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <div className={styles.scrollSpacer} aria-hidden="true" />
          <img
            className={styles.contentImage}
            src="/content.png"
            alt="모바일 청첩장 콘텐츠"
            loading="lazy"
          />
        </main>
      </div>
    </>
  );
}
