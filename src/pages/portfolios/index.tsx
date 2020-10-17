import React from 'react';
import * as S from './Style';
import Header from 'components/Header/Header';
import Filter from 'components/Filter/Filter';
import Board from 'components/Board/Board';
import LoadMore from 'components/LoadMore/LoadMore';


const Index: React.FC = () => {
    return (
      <S.Positioner>
        <Header />
        <Filter />
        <S.BoardList>
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </S.BoardList>
        <S.More>
          <LoadMore />
        </S.More>
      </S.Positioner>
    );
  };
  
  
export default Index;