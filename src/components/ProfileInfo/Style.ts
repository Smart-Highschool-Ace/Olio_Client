import styled from "@emotion/styled";

export const Positioner = styled.div`
  width: 100%;
`;

export const Introduce = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #dahee {
    position: absolute;
    background-color: #ffffff;
    border-radius: 100px;
  }
`;

export const Intro_1 = styled.div`
  width: 100%;
  height: 50%;
  background-color: #5f7869;
`;

export const Intro_2 = styled.div`
  width: 100%;
  height: 50%;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  min-width: 75%;
  height: 100%;
  border-bottom: 0.3px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-top: 50px;

  color: #000000;
`;

export const Grade = styled.div`
  font-weight: normal;
  font-size: 13px;
  margin-top: 6px;

  padding: 3px 22px;
  background: #ffffff;
  border: 2px solid #ffcc7e;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const Skill = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  margin-top: 10px;

  color: #b6b6b6;
`;
