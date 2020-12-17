import styled from "@emotion/styled";

export const InfoCard = styled.div`
  width: 100%;
  height: 153px;
  display: flex;
  flex-direction: column;

  min-height: 153px;
  margin-left: auto;
  background: #ffffff;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
`;

export const InfoSchool = styled.div`
  margin-left: 28px;
  margin-top: 2rem;
  display: flex;
`;

export const SchoolTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  #school {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  #major {
    font-weight: normal;
    font-size: 15px;
  }
`;
