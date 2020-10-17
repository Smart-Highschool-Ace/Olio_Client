import React from 'react';
import * as S from './Style';
import { Setting } from 'Assets/Svg';

const Filter: React.FC = () => {
    return (
        <S.Positioner>
            <S.Wrapper>
                <div className="filter">
                    <Setting />
                    <span>Filters</span>
                </div>
                <S.Navigation>
                    <span>ALL</span>
                    <span>WEB</span>
                    <span>ANDROID</span>
                    <span>IOS</span>
                    <span>AI</span>
                    <span>DATABASE</span>
                    <span>ADUINO</span>
                </S.Navigation>
            </S.Wrapper>
        </S.Positioner>
    );
  };
  
export default Filter;