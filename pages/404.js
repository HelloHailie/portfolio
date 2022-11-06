import Link from "next/link";
import Error from "../public/svg/404.svg";

export default function PageNotFound() {
  return (
    <div className='m-3 mb-2 md:mb-4'>
      <Error />
      <h1 className='text-black-800 text-2xl sm:text-3xl md:text-4xl font-bold pt-5 mb-2 md:mb-4'>
        페이지를 찾을 수 없습니다.
      </h1>
      <h1 className='text-1xl sm:text-2xl md:text-3xl mb-2 md:mb-4'>
        입력하신 페이지의 주소가 정확한지 다시 확인해주세요.
      </h1>
      <div className='flex flex-col sm:flex-row lg:justify-start'>
        <Link href='/' className='btn-project'>
          메인 바로가기
        </Link>
      </div>
    </div>
  );
}
