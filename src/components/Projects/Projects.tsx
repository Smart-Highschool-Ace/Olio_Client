import React from "react";
import ProjectItems from "components/ProjectItems/ProjectItems";
import * as S from "./Style";
import { ServiceType } from "utils/GlobalTypes";

interface ProjectsProps {
  service: ServiceType;
}

const Projects: React.FC<ProjectsProps> = ({ service }) => {
  const MappingReturnServiceItem = (service: ServiceType) =>
    service.map((item, idx) => <ProjectItems list={item} key={idx} />);

  return (
    <S.Positioner>
      <S.Header>
        <S.Title>프로젝트</S.Title>
        <S.Button>추가</S.Button>
      </S.Header>
      <S.Wrapper>{MappingReturnServiceItem(service)}</S.Wrapper>
    </S.Positioner>
  );
};

export default Projects;
