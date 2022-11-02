import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import axios from "axios";
import ProjectItem from "../components/projects/projectItem";

export default function Projects({ projects }) {
  // console.log(projects);
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen mb-10 px-10'>
        <Head>
          <title>이선민 포트폴리오</title>
          <meta name='description' content='이선민 포트폴리오' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1 className='text-4xl sm:text-6xl py-5 flex justify-center '>
          <span className='text-violet-600 font-bold'>
            {projects.results.length}
          </span>
          개의 프로젝트가 있습니다.
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 m-6 py-10 w-full'>
          {projects.results.map((aProject) => (
            <ProjectItem data={aProject} key={aProject.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectNames = projects.results.map((aProject) =>
    aProject.properties.Name.title.map((e) => e.plain_text)
  );

  // console.log(`projectNames : ${projects}`)
  console.log(projects.length);

  // const options = {
  //   method: "POST",
  //   url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
  //   headers: {
  //     accept: "application/json",
  //     "Notion-Version": "2022-02-22",
  //     "content-type": "application/json",
  //     authorization: `Bearer ${TOKEN}`,
  //   },
  //   data: { page_size: 100 },
  // };

  // await axios
  //   .request(options)
  //   .then(function (response) {
  //     const projects = response.data;

  //     console.log(projects);

  //     const projectIds = projects.results.map(
  //       (aProject) => aProject.properties.Name.title
  //     );

  //     console.log(`projectIds : ${projectIds}`);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
