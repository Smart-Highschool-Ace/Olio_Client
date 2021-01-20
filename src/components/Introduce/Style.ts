import styled from "@emotion/styled";

export const Positioner = styled.div`
  width: 23%;
  max-height: 197px;
  background: #ffffff;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Nanum Gothic";
`;

export const Intro = styled.div`
  width: 90%;
  height: 50%;
  border-bottom: 0.5px solid;
  display: flex;
  flex-direction: column;
`;

export const Website = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`;

export const Button = styled.div`
  font-weight: bold;
  font-size: 13px;
  margin-left: auto;
  color: #5f7869;
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-right: auto;
  color: #000000;
`;

export const Desc = styled.div`
  margin-top: 0.6rem;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #6a6a6a;
`;

export const GitLink = styled.div`
  display: flex;
  margin-right: auto;
  margin-top: 0.6rem;
  align-items: center;

  span {
    margin-left: 0.6rem;
    font-size: 13px;

    color: #4b4b4b;
  }
`;
