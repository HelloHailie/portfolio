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
        <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            안녕하세요 개발자 이선민입니다
          </h1>
          <p className='mb-20 leading-relaxed'>
            커뮤니케이션의 중요성을 믿고, 다수의 더 나은 삶을 위해 매일매일
            배웁니다.
          </p>
          <div className='flex lg:flex-row flex-col gap-8'>
            <div className='lg:w-2/5 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'>
              <Image
                src={profile}
                alt='이선민 프로필 이미지'
                className='rounded-xl'
                layout='responsive'
              />
            </div>
            <div className='flex flex-col'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium underline italic'>
                학력
              </h1>
              <div className='font-semibold text-xl'>
                코드스테이츠 (Code States)
              </div>
              <div>Advanced software engineering, Immersive program (39기)</div>
              <p className='leading-relaxed'>2022.04 - 2022.10</p>
              <ul class='list-disc list-inside mb-9'>
                <li>
                  Javascript 기반으로 학습하고, React로 프론트엔드 과정 학습
                </li>
                <li>
                  24주 동안 매일 강도 높은 과제 수행 및 페어 프로그래밍과 코드
                  리뷰 경험
                </li>
                <li>협업 프로젝트 2회 진행</li>
              </ul>
              <div className='font-semibold text-xl'>
                덕성여자대학교 (Duksung Women’s University)
              </div>
              <div>중어중문학 전공, 글로벌통상법무연계전공 복수전공</div>

              <p className='leading-relaxed'>2013.03 - 2018.08</p>
              <ul class='list-disc list-inside mb-9'>
                <li>교내 성적 장학금 다수</li>
                <li>2015년 1년 간 중국 교환학생 및 유학생 성적 우수상 수상</li>
              </ul>
              <h3 className='title-font sm:text-4xl text-3xl mb-4 font-medium underline italic'>
                업무경력
              </h3>
              <div className='font-semibold text-xl'>
                헬만월드와이드로지스틱스 (Hellmann Worldwide Logistics)
              </div>
              <div>항공수출오퍼레이터</div>

              <p className='leading-relaxed'>2018.10 ~ 2021.10</p>
              <ul class='list-disc list-inside mb-9'>
                <li>
                  화주, 해외지사와의 원활한 커뮤니케이션을 통해 화물이 안전하게
                  고객사가 원하는 곳에 적시에 운반되도록하는 역할
                </li>
                <li>
                  항공사 부킹 및 스케줄 관리하면서 다소 타이트한 일정이더라도
                  이상없이 진행되도록 함
                </li>
              </ul>
            </div>
          </div>
          <div className='text-center lg:w-4/5 w-full'>
            <h3 className='text-3xl font-bold text-left'>
              🎙왜 개발자가 되고 싶나요?
            </h3>
            <p className='mt-4 mb-8 leading-relaxed text-left'>
              서로의 코드를 공유하고 리뷰하며 모두가 윈윈하는 팀 문화가 있는
              곳에서 일하며 성장하고 싶은 욕심에 개발자라는 직업에 관심이
              생겼습니다. 개발을 배우며 주어진 일만을 수행하는 것보다 더 나은
              서비스를 만들고자 치열하게 고민한다는 점이 매력적이어서 개발자가
              되기로 결심했습니다.
            </p>
            <h3 className='text-3xl font-bold text-left'>
              🎙어떤 개발자가 되고 싶은가요?
            </h3>
            <p className='mt-4 mb-20 leading-relaxed text-left'>
              유저 입장에 서비스 퀄리티 향상을 위해 항상 고민하는 개발자가 되고
              싶습니다. 이를 위해서 ‘소통’이 프론트엔드 개발자의 주요 덕목 중
              하나라고 생각합니다. 디자이너와 백엔드 개발자 사이에 의견 차이가
              발생할 수 있는데, 이 부분에서 프론트엔드 개발자가 중간에서 의견을
              조율해주는 역할을 해야한다고 생각합니다. 건강한 트러블은 더 좋은
              조직과 서비스를 만든다고 생각하기에 여러 의견을 듣고 조율할 수
              있는 개발자가 되고 싶습니다.
            </p>
            <div className='flex justify-center gap-4'>
              <Link href='/skills' className='btn-project'>
                기술스택
                <br className='inline-block md:hidden' />
                보러가기
              </Link>
              <Link href='/projects' className='btn-project'>
                프로젝트
                <br className='inline-block md:hidden' />
                보러가기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
