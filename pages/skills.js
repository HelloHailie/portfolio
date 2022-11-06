import Layout from "../components/layout";
import Head from "next/head";
import zustand from "../public/zustand.png";
import Link from "next/link";
import { frontSkillsItem } from "../components/skills-item";
import { etcSkillsItem } from "../components/skills-item";

export default function Skills() {
  return (
    <Layout>
      <Head>
        <title>이선민 포트폴리오</title>
        <meta name='description' content='이선민 포트폴리오' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 pt-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4'>
              FrontEnd
            </h1>
            <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
              좋은 유저 경험을 위한 기능과 디자인에 집중합니다.
            </p>
          </div>
          <div className='flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2'>
            {frontSkillsItem.map((a, idx) => (
              <div className='p-2 sm:w-1/2 w-full relative' key={idx}>
                <div className='skill-cover'>
                  {a[0]}
                  <span className='title-font font-medium text-xl ml-4 dark:text-black'>
                    {a[1]}
                  </span>
                </div>
                <div className='skill-text'>
                  <h1 className='title-font text-lg font-medium dark:text-gray-900 mb-3'>
                    {a[1]}
                  </h1>
                  <p className='leading-relaxed'>{a[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4'>
              Etc
            </h1>
            <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
              아래 협업툴을 사용하여 타 포지션(백엔드)과의 협업 경험이 있습니다.
            </p>
          </div>
          <div className='flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2'>
            {etcSkillsItem.map((a, idx) => (
              <div className='p-2 sm:w-1/2 w-full relative' key={idx}>
                <div className='skill-cover'>
                  {a[0]}
                  <span className='title-font font-medium text-xl ml-4 dark:text-black'>
                    {a[1]}
                  </span>
                </div>
                <div className='skill-text'>
                  <h1 className='title-font text-lg font-medium dark:text-gray-900 mb-3'>
                    {a[1]}
                  </h1>
                  <p className='leading-relaxed'>{a[2]}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col sm:flex-row justify-center mt-16 text-center'>
            <Link href='projects' className='btn-project'>
              프로젝트 바로가기
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
