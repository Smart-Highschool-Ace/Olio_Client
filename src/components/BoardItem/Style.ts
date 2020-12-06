import styled from "@emotion/styled";

export const Positioner = styled.div`
  max-width: 370px;
  max-height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 370px;
  min-height: 270px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
`;

export const ThumNail = styled.div`
  min-width: 330px;
  min-height: 190px;
  background: #eaec83;
  border-radius: 10px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 0 1rem;

  span {
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
  }

  .view {
    display: flex;
    align-items: center;

    svg {
      margin-top: 2px;
    }
    span {
      font-family: Fira Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;
      margin-left: 2px;

      color: #9ea2a1;
    }
  }
`;
