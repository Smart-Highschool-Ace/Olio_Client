import React from 'react';
import * as S from './Style';
import BoardItem from 'components/BoardItem/BoardItem';

const Board: React.FC = () => {
    return (
        <S.Positioner>
            <BoardItem />
        </S.Positioner>
    )
}

export default Board;