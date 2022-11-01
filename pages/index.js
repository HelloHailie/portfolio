import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Main from "../components/home/main";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>이선민 포트폴리오</title>
        <meta name='description' content='이선민 포트폴리오' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
    </Layout>
  );
}
