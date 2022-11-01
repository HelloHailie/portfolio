import Link from "next/link";
import DarkModeBtn from "./darkModeBtn";

export default function Header() {
  return (
    <>
      <header className='body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link
            href='/'
            className='flex title-font font-medium items-center mb-4 md:mb-0'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-xl'>이선민 포트폴리오</span>
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <Link href='/' className='mr-5 hover:text-gray-900'>
              Home
            </Link>
            <Link href='/about-me' className='mr-5 hover:text-gray-900'>
              About Me
            </Link>
            <Link href='/projects' className='mr-5 hover:text-gray-900'>
              Projects
            </Link>
            <Link href='/skills' className='mr-5 hover:text-gray-900'>
              Skills
            </Link>
          </nav>
          {/* 버튼자리 */}
          <DarkModeBtn />
        </div>
      </header>
    </>
  );
}
