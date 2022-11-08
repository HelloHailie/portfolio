import Animation from "../home/animation";
import Link from "next/link";

export default function Main() {
  return (
    <div>
      <div className='pb-6 sm:pb-8 lg:pb-0 flex text-center justify-center'>
        <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <section className='flex flex-col lg:flex-row sm:gap-10'>
            <div className='xl:w-3/5 flex flex-col sm:text-center lg:text-left lg:py-12 xl:py-24'>
              <p className='text-violet-700 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6 mt-6'>
                Frontend-Developer
              </p>

              <h1 className='text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 pt-5'>
                프론트엔드 개발자 이선민
              </h1>

              <div className='xl:text-lg leading-relaxed mb-8 md:mb-12'>
                <div className='pb-3'>
                  💜 안녕하세요. 트랜디한 개발자가 되고자 노력하는 이선민입니다.
                </div>
                <div className='pb-3'>
                  💜 항상 유저 입장에서 서비스를 향상하고자 고민합니다.
                </div>
                <div className='pb-3'>
                  💜 개발 분야 완벽을 추구하며 꾸준히 공부하고 여러 가지
                  경험하고 있습니다.
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-2.5 sm:justify-center lg:justify-start'>
                <Link href='about-me' className='btn-project'>
                  자기소개 보러가기
                </Link>
                <Link href='projects' className='btn-project'>
                  프로젝트 보러가기
                </Link>
              </div>
            </div>

            <div className='h-48 lg:h-auto lg:flex lg:items-center lg:max-w-2xl max-w-fit'>
              <Animation />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
