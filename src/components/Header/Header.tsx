import React from "react";
import * as S from "./Style";

import Link from "next/link";

import Logo from "assets/svg/Logo.svg";
import Magnifier from "assets/svg/Magnifier.svg";
import Profile from "assets/svg/Profile.svg";

const Header: React.FC = () => {
  return (
    <S.Positioner>
      <Link href="/home/all">
        <Logo style={{ cursor: "pointer" }} />
      </Link>
      <div className="search">
        <Magnifier />
      </div>
      <div className="profile">
        <Link href="/profile">
          <Profile style={{ cursor: "pointer" }} />
        </Link>
      </div>
    </S.Positioner>
  );
};

export default Header;
