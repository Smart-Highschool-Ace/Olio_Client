import React from 'react';
import * as S from './Style';
import { Logo, Profile, Magnifier } from 'Assets/Svg';

const Header: React.FC = () => {
    return (
        <S.Positioner>
            <Logo />
            <div className="search"><Magnifier /></div>
            <div className="profile">
                <Profile />
                <span>UPLOAD</span>
            </div>
        </S.Positioner>
    );
  };
  
export default Header;