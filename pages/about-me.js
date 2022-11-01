import Layout from "../components/layout";
import Head from "next/head";

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>이선민 포트폴리오</title>
        <meta name='description' content='이선민 포트폴리오' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>자기소개</h1>
    </Layout>
  );
}
