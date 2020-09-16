import { People, Views } from 'Assets/Svg';
import React from 'react';
import * as S from './Style';

const BoardItem: React.FC = () => {
    return (
        <S.Positioner>
            <S.ThumNail />
            <S.Footer>
                <People/>
                <span>Title</span>
                <div className="view">
                    <Views />
                    <span>20</span>
                </div>
            </S.Footer>
        </S.Positioner>
    )
}

export default BoardItem;