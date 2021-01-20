import styled from "@emotion/styled";

export const Positioner = styled.div`
  width: 100%;
  min-height: 121px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const Button = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;

  padding: 1%;
  color: #5f7869;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 19px;
`;

export const Desc = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 12px;

  margin-top: 0.8rem;
  color: #8a8a8a;
`;

export const SkillWrap = styled.div`
  display: flex;
  margin-top: 0.8rem;
`;
