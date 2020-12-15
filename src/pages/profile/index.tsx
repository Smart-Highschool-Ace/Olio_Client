import React from "react";
import * as S from "./Style";
import Header from "components/Header/Header";
import ProfileInfo from "components/ProfileInfo/ProfileInfo";
import School from "components/School/School";
import Introduce from "components/Introduce/Introduce";
import Projects from "components/Projects/Projects";
import Award from "components/Award/Award";

const userExample = {
  name: "이다희",
  grade: 2,
  skills: "Web Front-End",
  school: "광주소프트웨어마이스터고등학교",
  major: "소프트웨어개발과",
};

const serviceList = [
  {
    title: "OLIO - 포트폴리오 웹 서비스",
    desc: "학생들의 포트폴리오 관리를 위한 웹 서비스 입니다.",
    skill: ["React", "TypeScript", "Styled-Components", "Koa"],
  },
  {
    title: "GSM SPACE - 학교 청원게시판 서비스",
    desc: "학생들의 편리한 학교생활을 위한 청원 게시판 웹 서비스 입니다.",
    skill: ["XD", "React"],
  },
  {
    title: "SLAT - 학교 시간표 알림 앱 서비스",
    desc: "앱으로 간편하게 학교 시간표를 알 수 있는 앱 서비스 입니다.",
    skill: ["Android"],
  },
  {
    title: "DOTORI - 기숙사 관리 웹 서비스",
    desc: "기숙사 생활 관리를 좀 더 간편하게 할 수 있는 웹 서비스 입니다.",
    skill: ["React", "TypeScript", "Styled-Components", "Koa"],
  },
];

const awardList = [
  {
    title: "AI 아이디어 경진 대회 우수상",
    desc:
      "AI 아이디어 경진대회에서 바른자세를 위한 AI ‘GP’(Good Posture)라는 아이디어를 내서 우수상을 받았습니다.",
    date: "2019.11.10. 수상",
  },
  {
    title: "AI 아이디어 경진 대회 우수상",
    desc:
      "AI 아이디어 경진대회에서 바른자세를 위한 AI ‘GP’(Good Posture)라는 아이디어를 내서 우수상을 받았습니다.",
    date: "2019.11.10. 수상",
  },
];

const index: React.FC = () => {
  return (
    <S.Positioner>
      <Header />
      <ProfileInfo user={userExample} />
      <S.Background>
        <S.Wrapper>
          <Introduce />
          <S.InfoWrapper>
            <School user={userExample} />
            <Projects service={serviceList} />
            <Award />
          </S.InfoWrapper>
        </S.Wrapper>
      </S.Background>
    </S.Positioner>
  );
};
export default index;
