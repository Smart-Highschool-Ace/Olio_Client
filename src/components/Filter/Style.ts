import styled from "@emotion/styled";

export const Positioner = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-right: 3%;
  display: flex;
  justify-content: center;
`;

export const FiltersButton = styled.div`
  width: 95px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #82b897;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 2%;

  span {
    font-family: Fira Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }

  color: #82b897;
  cursor: pointer;
`;

export const NavWrapper = styled.div`
  min-width: 1106px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.div`
  color: #abd995;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  padding: 2px 22px;
  border-radius: 5px;
  text-decoration: none;

  cursor: pointer;
  :hover {
    color: #ffffff;
    background-color: #abd995;
  }
`;
