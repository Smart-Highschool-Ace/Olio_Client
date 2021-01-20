import React from "react";
import AwardItem from "components/AwardItem/AwardItem";
import * as S from "./Style";

const Award: React.FC = () => {
  return (
    <S.Positioner>
      <S.Header>
        <S.Title>수상</S.Title>
      </S.Header>
      <AwardItem />
    </S.Positioner>
  );
};

export default Award;
