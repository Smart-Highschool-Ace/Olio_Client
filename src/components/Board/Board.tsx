import React, { useEffect, useState } from "react";
import * as S from "./Style";
import { useRouter } from "next/router";
import BoardItem from "components/BoardItem/BoardItem";
import { BoardObj } from "../../utils/GlobalTypes";

interface BoardProps {
  board: BoardObj;
}

const Board: React.FC<BoardProps> = ({ board }) => {
  const nextRouter = useRouter();
  const { id } = nextRouter.query;

  const MappingReturnBoardItem = (board: BoardObj) =>
    board.map((item, idx) => <BoardItem list={item} key={idx} />);

  return id === "all" ? (
    <S.Positioner>{MappingReturnBoardItem(board)}</S.Positioner>
  ) : null;
};

export default Board;
