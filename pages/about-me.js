import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import profile from "../public/seonminProfile.jpg";

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>이선민 포트폴리오</title>
        <meta name='description' content='이선민 포트폴리오' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col gap-5'>
          <div>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              안녕하세요 개발자 이선민입니다
            </h1>
            <p className='mb-20 leading-relaxed'>
              커뮤니케이션의 중요성을 믿고, 다수의 더 나은 삶을 위해 매일매일
              배웁니다.
            </p>
          </div>

          <div className='flex xl:flex-row flex-col items-center gap-10 lg:w-4/5 w-full'>
            <div className='xl:w-3/5 lg:w-3/5 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'>
              <Image
                src={profile}
                alt='이선민 프로필 이미지'
                className='rounded-xl'
                layout='responsive'
              />
            </div>
            <div className='flex flex-col leading-relaxed'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium bg-slate-100 dark:bg-slate-700'>
                🎓 학력
              </h1>
              <div className='font-semibold text-xl'>
                코드스테이츠 (Code States)
              </div>
              <div className='italic'>
                Software Engineering Bootcamp Frontend 39기
              </div>
              <p className='leading-relaxed'>2022.04 - 2022.10</p>
              <ul className='list-disc list-inside mb-9'>
                <li>
                  2번의 팀 프로젝트를 react기반으로 만든 경험이 있고, 백엔드
                  팀원들과 협업을 통한 웹앱 개발 방법 체득
                </li>
                <li>
                  웹 개발자가 반드시 알아야 할 네트워크, 알고리즘 등 기초 CS
                  지식 학습
                </li>
                <li>
                  자바스크립트의 자료형, 스코프, 클로저, ES6 주요 문법, 비동기
                  등 웹앱 개발을 위해 필요한 핵심 내용 학습
                </li>
              </ul>
              <div className='font-semibold text-xl'>
                덕성여자대학교 (Duksung Women’s University)
              </div>
              <div className='italic'>
                중어중문학 전공, 글로벌통상법무연계전공 복수전공
              </div>

              <p className='leading-relaxed'>2013.03 - 2018.08</p>
              <ul className='list-disc list-inside mb-9'>
                <li>
                  2015년 1년간 중국 교환학생 경험과 유학생 성적 우수상 수상
                </li>
              </ul>
              <h3 className='title-font sm:text-4xl text-3xl mb-4 font-medium  bg-slate-100  dark:bg-slate-700'>
                💼 업무경력
              </h3>
              <div className='font-semibold text-xl'>
                헬만월드와이드로지스틱스 (Hellmann Worldwide Logistics)
              </div>
              <div className='italic'>항공수출오퍼레이터</div>

              <p className='leading-relaxed'>2018.10 ~ 2021.10</p>
              <ul className='list-disc list-inside mb-9'>
                <li>화주, 해외지사와의 커뮤니케이션을 통한 화물 운송 관리</li>
                <li>수출 서류 관리 및 daily KPI Report 관리</li>
              </ul>
            </div>
          </div>
          <div className='text-center lg:w-4/5 w-full'>
            <h3 className='text-3xl font-bold text-left'>
              🎙왜 개발자가 되고 싶나요?
            </h3>
            <p className='mt-4 mb-8 leading-relaxed text-left'>
              3년이 넘도록 물류, 무역 쪽에서 일을 하다가 경력을 인정받으면서
              꾸준히 일을 하기 힘들다는 것을 깨달았습니다. 일을 하는 것이 삶에
              활력이 된다고 생각했기에 자연스럽게 전직을 생각하게 되었습니다.
              경력을 인정받으면서 꾸준히 일을 하기 위해서는 남들과 비교해서
              경쟁력 있는 나만의 기술이 필요하다고 생각했고, 큰 용기를 내서
              개발자의 길로 들어서게 되었습니다.
            </p>
            <h3 className='text-3xl font-bold text-left'>
              🎙어떤 개발자가 되고 싶은가요?
            </h3>
            <p className='mt-4 mb-20 leading-relaxed text-left'>
              ‘소통’이 프론트엔드 개발자의 주요 덕목 중 하나라고 생각합니다.
              디자이너와 백엔드 개발자 사이에 의견 차이가 발생할 수 있는데, 이
              부분에서 프론트엔드 개발자가 중간에서 이견을 조율해주는 역할을
              해야 한다고 생각합니다. 건강한 트러블은 더 좋은 조직과 서비스를
              만든다고 생각하기에 여러 의견을 듣고 조율할 수 있는 개발자가 되고
              싶습니다.
            </p>
            <div className='flex flex-col sm:flex-row sm:justify-center lg:justify-center gap-2.5'>
              <Link href='/skills' className='btn-project'>
                기술스택 보러가기
              </Link>
              <Link href='/projects' className='btn-project'>
                프로젝트 보러가기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
