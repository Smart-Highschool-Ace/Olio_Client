import React from "react";
import * as S from "./Style";

const AwardItem: React.FC = () => {
  return (
    <S.Positioner>
      <S.Header>
        <S.Button>추가</S.Button>
      </S.Header>
      <S.Wrapper>
          <S.Title>{}</S.Title>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default AwardItem;
