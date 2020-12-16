import React from "react";
import { ServiceType } from "../../utils/GlobalTypes";
import * as S from "./Style";

interface SkillProps {
  service: ServiceType["skill"];
}

const Skill: React.FC<SkillProps> = ({ service }) => {
  return <S.Positioner>{service}</S.Positioner>;
};

export default Skill;
