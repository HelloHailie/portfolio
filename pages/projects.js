import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import axios from "axios";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>이선민 포트폴리오</title>
        <meta name='description' content='이선민 포트폴리오' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>프로젝트</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      authorization: `Bearer ${TOKEN}`,
    },
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}`,
    options
  );

  const projects = await res.json();

  // const projectIds = projects.results.map((aProject) => aProject.id);
  // console.log(projectIds);

  // const options = {
  //   method: "GET",
  //   url: `https://api.notion.com/v1/databases/${DATABASE_ID}`,
  //   headers: {
  //     accept: "application/json",
  //     "Notion-Version": "2022-02-22",
  //     authorization: `Bearer ${TOKEN}`,
  //   },
  // };

  // await axios
  //   .request(options)
  //   .then(function (response) {
  //     const projects = response.data;
  //     console.log(projects);

  //     const projectIds = projects.map((aProject) => aProject.id);

  //     console.log(`projectIds: ${projectIds}`);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return {
    props: { mods: projects }, // will be passed to the page component as props
  };
}
