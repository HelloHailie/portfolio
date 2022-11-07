import Image from "next/image";
import zustand from "../public/zustand.png";
import React from "../public/svg/react.svg";
import Javascript from "../public/svg/javascript.svg";
import Nextjs from "../public/svg/nextjs.svg";
import StyledComponet from "../public/svg/styled-component.svg";
import TailwindCSS from "../public/svg/tailwindCSS.svg";
import Github from "../public/svg/github.svg";
import Figma from "../public/svg/figma.svg";
import Discord from "../public/svg/discord.svg";
import Notion from "../public/svg/notion.svg";
import Aws from "../public/svg/aws.svg";
import Vercel from "../public/svg/vercel.svg";

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
  [
    <Nextjs key={Nextjs} />,
    "Nextjs",
    "초기 로딩 속도가 빠르고 검색 엔진 최적화(SEO)에 유리한 SSR에 관심이 생겨 공부하고 있습니다.",
  ],
  [
    <Image
      src={zustand}
      alt='zustand image'
      width={50}
      height={50}
      key={zustand}
    />,
    "Zustand",
    "사용하기 쉽고, 불필요한 렌더링을 줄일 수 있는 Zustand를 사용하여 상태관리를 한 경험이 있습니다.",
  ],
  [
    <StyledComponet key={StyledComponet} />,
    "Styled-component",
    "컴포넌트별로 CSS를 작성하여 직관적으로 확인할 수 있는 장점이 있어서 React를 사용한 프로젝트에서 사용한 경험이 있습니다.",
  ],
  [
    <TailwindCSS key={TailwindCSS} />,
    "TailwindCSS",
    "html에서 클래스 명 하나로 style을 지정할 수 있는 장점이 있어서 Nest.js를 사용한 프로젝트에서 tailwind CSS를 사용한 경험이 있습니다.",
  ],
];

const etcSkillsItem = [
  [
    <Github key={Github} />,
    "Github",
    "Git Commit convention을 통한 협업 경험이 있고, 칸반 보드를 활용하여 업무 시각화 경험이 있습니다.",
  ],
  [
    <Figma key={Figma} />,
    "Figma",
    "Figma를 이용한 프로젝트 와이어 프레임, 유저 플로우 제작 경험이 있습니다.",
  ],
  [
    <Discord key={Discord} />,
    "Discord",
    "디스코드를 이용한 소통, 협업 경험이 있습니다.",
  ],
  [
    <Notion key={Notion} />,
    "Notion",
    "노션을 이용한 프로젝트 일정 관리와 회의록 작성을 하는 등 팀 문서를 정리한 경험이 있습니다.",
  ],
  [<Aws key={Aws} />, "AWS", "AWS S3을 통한 프로젝트 배포 경험이 있습니다."],
  [
    <Vercel key={Vercel} />,
    "Vercel",
    "Vercel을 통한 프로젝트 배포 경험이 있습니다.",
  ],
];

export { frontSkillsItem, etcSkillsItem };
