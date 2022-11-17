## ⭐️배포 링크: https://portfolio-hellohailie.vercel.app/

### 📚사용한 기술

- Next.js :
  처음 방문했을 때 빠르게 로딩이 되면서, 포트폴리오가 검색이 잘 되면 좋겠다는 생각에 Next.js를 사용하였습니다.
- tailwind CSS :
  쉽게 반응형 웹을 만들고자 했기 때문에 tailwind CSS를 사용했습니다. class에 설정을 하면 되기 때문에 파일을 따로 설정할 필요도 없고, 화면을 위,아래로 번갈아가면서 개발하지 않아도 되서 좋았습니다.

---

### 💡getStaticProps 함수를 활용한 Notion API 연동

Nextjs의 경우 사전 렌더링(pre-rendering)을 getServerSideProps, getStaticProps라는 함수를 사용해서 쉽게 구현할 수 있습니다.
getStaticProps는 최초 빌드 시에 딱 한 번만 호출이 됩니다. 즉, 최초 빌드 시 빌드되는 값이 추후에 수정될 일이 없는 경우에 사용하기 좋다는 것인데 정적인 페이지를 렌더링하기 좋습니다.  
저는 Notion에 정리해둔 프로젝트 데이터를 불러오기만 하면 되기 때문에 데이터의 실시간 성이 중요하지 않았습니다.
그래서 getServerSideProps가 아닌 getStaticProps를 사용하게 되었습니다.

```javascript
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
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 m-6 py-10 w-full'>
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
          property: "order",
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
```

---

### 💡반복되는 코드 줄이기

기술스택 페이지는 반복되는 코드가 많았습니다.
그래서 기술스택 설명 부분은 따로 빼서 배열로 만들고, 이 데이터를 불러와서 map 고차함수를 사용하여 반복되는 코드를 줄일 수 있었습니다.

// skill-item.js

```javascript
const frontSkillsItem = [
  [
    <React key={React} />,
    "React",
    "다양한 라이브러리를 사용할 수 있는 React를 주로 사용합니다.",
  ],
  [
    <Javascript key={Javascript} />,
    "Javascript",
    "ECMAScript의 변화를 꾸준히 살피고 학습합니다.",
  ],
  ...
```

// skill.js

```javascript
<div className='flex flex-wrap lg:w-3/5 md:mx-auto sm:mb-2'>
  {frontSkillsItem.map((a, idx) => (
    <div className='p-2 xl:w-1/2 w-full relative' key={idx}>
      <div className='skill-text'>
        {a[0]}
        <span className='title-font font-medium text-xl ml-4 dark:text-black'>
          {a[1]}
        </span>
      </div>
      <div className='skill-cover'>
        <h1 className='title-font font-medium text-xl m-4 dark:text-black'>
          {a[0]}
        </h1>
        <p className='leading-relaxed ml-3 p-0 dark:text-black'>{a[2]}</p>
      </div>
    </div>
  ))}
</div>
```

---

### 💡다크 모드

- `next-themes` 활용
- Avoid Hydration Mismatch
  서버에서 테마를 알 수 없기 때문에 useTheme에서 반환되는 값은 클라이언트에 마운트될 때까지 정의되지 않습니다.
  즉, 클라이언트에 마운트되기 전에 현재 테마를 기반으로 UI를 렌더링하려고 하면 `Hydration 불일치` 오류가 표시됩니다.

이 문제를 해결하기 위해서 페이지가 클라이언트에 마운트될 때 현재 테마를 사용하는 UI만 렌더링되도록 `useEffect`를 사용했습니다.
`useEffect`는 클라이언트에서만 실행되므로 안전하게 UI를 표시할 수 있습니다.

```javascript
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkModeBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-100 text-orange-400 dark:text-yellow-500 dark:bg-slate-600 rounded text-base mt-4 md:mt-0'
        type='button'
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <svg
          width='16'
          height='16'
          fill='currentColor'
          className='dark:invisible visible h-5 w-5 dark:h-0 dark:w-0'
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
        </svg>

        <svg
          width='16'
          height='16'
          fill='currentColor'
          className='invisible dark:visible dark:h-5 dark:w-5 h-0 w-0'
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z' />{" "}
          <path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z' />
        </svg>
      </button>
    </>
  );
}
```

---

### 💡Class를 사용하여 테마 설정

- Next.js 앱이 클래스를 사용하여 테마를 설정할 수 있도록 속성을 class로 변경하여 사용했습니다.

// \_app.js

```javascript
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
```

// tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

### 💡반응형 웹

- tailwind CSS를 사용하여 레이아웃을 디바이스 별로 변경하였습니다. (sm, md, lg, xl)

```javascript
  <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col gap-5'>
          <div>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              안녕하세요 개발자 이선민입니다
            </h1>
            ...
```
