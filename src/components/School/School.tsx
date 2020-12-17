import React from "react";
import * as S from "./Style";
import Gsm from "assets/svg/Gsm.svg";
import { UserObj } from "utils/GlobalTypes";

interface UserProps {
  user: UserObj;
}

const School: React.FC<UserProps> = ({ user }) => {
  return (
    <S.InfoCard>
      <S.Title>학과</S.Title>
      <S.InfoSchool>
        <Gsm />
        <S.SchoolTitle>
          <span id="school">{user.school}</span>
          <span id="major">{user.major}</span>
        </S.SchoolTitle>
      </S.InfoSchool>
    </S.InfoCard>
  );
};

export default School;
