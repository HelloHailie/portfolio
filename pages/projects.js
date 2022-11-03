import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import axios from "axios";
import ProjectItem from "../components/projects/projectItem";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen mb-10 px-10'>
        <Head>
          <title>이선민 포트폴리오</title>
          <meta name='description' content='이선민 포트폴리오' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1 className='text-4xl sm:text-6xl py-5 flex justify-center '>
          <span className='italic'>I have&nbsp;</span>

          <span className='text-violet-600 font-bold italic'>
            {projects.results.length}
          </span>
          <span className='italic'>&nbsp;projects</span>
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
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    data: JSON.stringify({
      sorts: [
        {
          property: "순서",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await axios.request(options);
  const projects = await res.data;

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
