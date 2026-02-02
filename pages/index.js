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
        <title>WeddingInvitation.com</title>
        <meta name="description" content="모바일 청첩장" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Wedding_Logo.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Image
            className={styles.heroLogo}
            src="/Wedding_Logo.ico"
            alt="Wedding logo"
            width={160}
            height={160}
            priority
          />
          <h1 className={styles.title}>모바일 청첩장</h1>
          <p className={styles.subtitle}>
            여기에서 예식 정보와 스토리를 채워나갈 수 있어요.
          </p>
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
