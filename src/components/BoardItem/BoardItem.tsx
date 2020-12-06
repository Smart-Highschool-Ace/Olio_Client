import People from "assets/svg/People.svg";
import Views from "assets/svg/Views.svg";

import React from "react";
import { ProjectType } from "utils/GlobalTypes";
import * as S from "./Style";

interface BoardItemProps {
  list: ProjectType;
}

const BoardItem: React.FC<BoardItemProps> = ({ list }) => {
  return (
    <S.Positioner onClick={() => alert(list.title + " Clicked!")}>
      <S.ThumNail />
      <S.Footer>
        <People style={{ marginLeft: 20 }} />
        <span>{list.title}</span>
        <div className="view">
          <Views />
          <span style={{ marginRight: 20 }}>{list.views}</span>
        </div>
      </S.Footer>
    </S.Positioner>
  );
};

export default BoardItem;
