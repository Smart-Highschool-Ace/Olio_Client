import React, { useEffect, useState } from "react";
import * as S from "./Style";
import Link from "next/link";
import { useRouter } from "next/router";
import Setting from "assets/svg/Setting.svg";
import { setgroups } from "process";

const filterList = [
  {
    router: "all",
    title: "ALL",
    //link: <Link href="/[home]" as="/home"></Link>,
  },
  {
    router: "webs",
    title: "WEB",
  },
  {
    router: "androids",
    title: "ANDROID",
  },
  {
    router: "ios",
    title: "IOS",
  },
  {
    router: "ai",
    title: "AI",
  },
  {
    router: "databases",
    title: "DATABASE",
  },
  {
    router: "aduinos",
    title: "ADUINO",
  },
];

const useUser = () => ({ user: null, loading: false });

const Filter: React.FC = () => {
  const nextRouter = useRouter();
  const { user, loading } = useUser();
  const { id } = nextRouter.query;

  useEffect(() => {
    if (!(user || loading)) {
      //nextRouter.push("/home/all");
      console.log("page name : " + id);
    }
  }, [user, loading, id]);

  const mappingMenuList = filterList.map((data, idx) => (
    <Link href="/home/[id]" as={`/home/${data.router}`}>
      <S.Navigation
        key={idx}
        //onClick={() => nextRouter.push(`/home/${data.router}`)}
        style={{ textDecoration: "none" }}
      >
        {data.title}
      </S.Navigation>
    </Link>
  ));

  return (
    <S.Positioner>
      <S.FiltersButton>
        <Setting />
        <span>Filters</span>
      </S.FiltersButton>
      <S.Wrapper>
        <S.NavWrapper>{mappingMenuList}</S.NavWrapper>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default Filter;
