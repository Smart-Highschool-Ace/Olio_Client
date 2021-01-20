import styled from "@emotion/styled";

export const Positioner = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #91b895;
  margin: 0 2%;

  .search {
    width: 600px;
    height: 30px;
    background-color: #e9e9e9;
    display: flex;
    align-items: center;
    padding-left: 1rem;

    .Mag {
      margin-right: auto;
    }
  }

  .profile {
    display: flex;

    span {
      margin-left: 26px;
    }
  }
`;
