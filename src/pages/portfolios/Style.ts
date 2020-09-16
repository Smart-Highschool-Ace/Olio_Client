import styled from '@emotion/styled';

export const Positioner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BoardList = styled.div`
    width: 100%;
    padding: 0 2.5%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, auto));
    grid-row-gap: 48px;
`

export const More = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 67px;
    cursor: pointer;
`