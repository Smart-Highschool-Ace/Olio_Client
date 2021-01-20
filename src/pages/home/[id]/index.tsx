import React from "react";
import * as S from "./Style";
import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import Board from "components/Board/Board";
import LoadMore from "components/LoadMore/LoadMore";

const projectList = [
  {
    id: "1",
    title: "olio",
    views: 85,
    skill: "web",
    date: "2020년 00월 00일",
  },
  {
    id: "2",
    title: "FEFU",
    views: 15,
    skill: "android",
    date: "2020년 00월 00일",
  },
  {
    id: "3",
    title: "QAS",
    views: 95,
    skill: "aduino",
    date: "2020년 00월 00일",
  },
  {
    id: "4",
    title: "Dotori",
    views: 29,
    skill: "web",
    date: "2020년 00월 00일",
  },
  {
    id: "5",
    title: "인공지능 프로젝트",
    views: 115,
    skill: "ai",
    date: "2020년 00월 00일",
  },
  {
    id: "1",
    title: "olio",
    views: 85,
    skill: "web",
    date: "2020년 00월 00일",
  },
  {
    id: "2",
    title: "FEFU",
    views: 15,
    skill: "android",
    date: "2020년 00월 00일",
  },
  {
    id: "3",
    title: "QAS",
    views: 95,
    skill: "aduino",
    date: "2020년 00월 00일",
  },
  {
    id: "4",
    title: "Dotori",
    views: 29,
    skill: "web",
    date: "2020년 00월 00일",
  },
  {
    id: "5",
    title: "인공지능 프로젝트",
    views: 115,
    skill: "ai",
    date: "2020년 00월 00일",
  },
  {
    id: "1",
    title: "olio",
    views: 85,
    skill: "web",
    date: "2020년 00월 00일",
  },
  {
    id: "2",
    title: "FEFU",
    views: 15,
    skill: "android",
    date: "2020년 00월 00일",
  },
  {
    id: "3",
    title: "QAS",
    views: 95,
    skill: "aduino",
    date: "2020년 00월 00일",
  },
  {
    id: "4",
    title: "Dotori",
    views: 29,
    skill: "web",
    date: "2020년 00월 00일",
  },
  {
    id: "5",
    title: "인공지능 프로젝트",
    views: 115,
    skill: "ai",
    date: "2020년 00월 00일",
  },
  {
    id: "1",
    title: "olio",
    views: 85,
    skill: "web",
    date: "2020년 00월 00일",
  },
  {
    id: "2",
    title: "FEFU",
    views: 15,
    skill: "android",
    date: "2020년 00월 00일",
  },
  {
    id: "3",
    title: "QAS",
    views: 95,
    skill: "aduino",
    date: "2020년 00월 00일",
  },
  {
    id: "4",
    title: "Dotori",
    views: 29,
    skill: "web",
    date: "2020년 00월 00일",
  },
  {
    id: "5",
    title: "인공지능 프로젝트",
    views: 115,
    skill: "ai",
    date: "2020년 00월 00일",
  },
];

const Index: React.FC = () => {
  return (
    <S.Positioner>
      <Header />
      <Filter />
      <S.BoardList>
        <Board board={projectList} />
      </S.BoardList>
      <S.More>
        <LoadMore />
      </S.More>
    </S.Positioner>
  );
};

export default Index;
