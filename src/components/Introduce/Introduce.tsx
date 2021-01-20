import React from "react";
import * as S from "./Style";
import Github from "assets/svg/Github.svg";

const Introduce: React.FC = () => {
  return (
    <S.Positioner>
      <S.Intro>
        <S.Header>
          <S.Button onClick={() => alert("수정 Click!")}>수정</S.Button>
          <S.Title>소개</S.Title>
        </S.Header>
        <S.Desc>안녕하세요 저는 GSM 대표 이다희 입니다.</S.Desc>
      </S.Intro>
      <S.Website>
        <S.Header>
          <S.Button>추가</S.Button>
          <S.Title>개인 웹사이트/포트폴리오</S.Title>
          <S.GitLink>
            <Github /> <span>www.github.com/dahee0315</span>
          </S.GitLink>
        </S.Header>
      </S.Website>
    </S.Positioner>
  );
};

export default Introduce;
