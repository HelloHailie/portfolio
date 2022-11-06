import Link from "next/link";
import DarkModeBtn from "./darkModeBtn";

export default function Header() {
  return (
    <>
      <header className='body-font bg-gray-100 dark:bg-slate-600/20'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link
            href='/'
            className='flex title-font font-medium items-center mb-4 md:mb-0'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentcolor'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-10 h-10 p-2 rounded-full text-white dark:text-white bg-violet-700 dark:bg-violet-500 hover:text-white hover:bg-violet-500'
              viewBox='0 0 24 24'
            >
              <path d='M21.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,6H16a1,1,0,0,0,0,2h2.59L13,13.59l-3.29-3.3a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,12.41l3.29,3.3a1,1,0,0,0,1.42,0L20,9.41V12a1,1,0,0,0,2,0V7A1,1,0,0,0,21.92,6.62Z' />
            </svg>
            <span className='ml-3 text-xl'>이선민 포트폴리오</span>
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <Link href='/' className='mr-5 hover:text-gray-900 text-xl'>
              Home
            </Link>
            <Link href='/about-me' className='mr-5 hover:text-gray-900 text-xl'>
              About Me
            </Link>
            <Link href='/projects' className='mr-5 hover:text-gray-900 text-xl'>
              Projects
            </Link>
            <Link href='/skills' className='mr-5 hover:text-gray-900 text-xl'>
              Skills
            </Link>
            <Link
              href='/contact-me'
              className='mr-5 hover:text-gray-900 text-xl'
            >
              Contact Me
            </Link>
          </nav>
          {/* 버튼자리 */}
          <DarkModeBtn />
        </div>
      </header>
    </>
  );
}
