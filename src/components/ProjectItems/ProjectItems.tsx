import React from "react";
import { ServiceType } from "utils/GlobalTypes";
import * as S from "./Style";
import Skill from "components/Skill/Skill";

interface ProjectItmesProps {
  list: ServiceType;
}

const ProjectItems: React.FC<ProjectItmesProps> = ({ list }) => {
  const mappingSkillList = (list: ServiceType) =>
    list.skill.map((item, idx) => <Skill service={item} key={idx} />);
  return (
    <S.Positioner>
      <S.Header>
        <S.Button onClick={() => alert(`삭제 Clicked!`)}>삭제</S.Button>
        <S.Button onClick={() => alert(`편집 Clicked!`)}>편집</S.Button>
      </S.Header>
      <S.Wrapper>
        <S.Title>{list.title}</S.Title>
        <S.Desc>{list.desc}</S.Desc>
        <S.SkillWrap>{mappingSkillList(list)}</S.SkillWrap>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default ProjectItems;
