import Animation from "../animation";

export default function Main() {
  return (
    <>
      <div className='bg-white pb-6 sm:pb-8 lg:pb-0'>
        <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <section className='flex flex-col lg:flex-row gap-6 sm:gap-10 md:gap-16'>
            {/* <!-- content - start --> */}
            <div className='xl:w-7/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24'>
              <p className='text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6'>
                Very proud to introduce
              </p>

              <h1 className='text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12'>
                안녕하세요 <br /> 프론트엔드 개발자
                <br /> <br /> 이선민입니다
              </h1>

              <p className='lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12'>
                💜 오래가는 개발자가 되고 싶은 프론트엔드 개발자 이선민입니다.
                <br />
                💜 항상 유저 입장에 서서 서비스를 향상시키고자 고민합니다.
                <br />
                💜 배움에는 완벽이 없다고 생각하기에 계속 공부하며 여러가지
                경험을 해보고 있습니다.
                <br />
              </p>

              <div className='flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5'>
                <a
                  href='#'
                  className='inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
                >
                  프로젝트 보러가기
                </a>
              </div>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div class='xl:w-5/12 h-48 lg:h-auto overflow-hidden '>
              {/* <div class='lg:max-w-lg md:w-1/2 w-5/6'> */}
              <Animation />
            </div>
            {/* <!-- image - end --> */}
          </section>
        </div>
      </div>
    </>
  );
}
