import React from "react";
import * as S from "./Style";
import Dahee from "assets/svg/Dahee.svg";
import { UserObj } from "utils/GlobalTypes";

interface UserProps {
  user: UserObj;
}

const ProfileInfo: React.FC<UserProps> = ({ user }) => {
  return (
    <S.Positioner>
      <S.Introduce>
        <S.Intro_1 />
        <S.Intro_2>
          <S.Wrapper>
            <S.Name>{user.name}</S.Name>
            <S.Grade>{user.grade}학년</S.Grade>
            <S.Skill>{user.skills}</S.Skill>
          </S.Wrapper>
        </S.Intro_2>
        <Dahee id="dahee" />
      </S.Introduce>
    </S.Positioner>
  );
};

export default ProfileInfo;
