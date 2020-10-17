import styled from '@emotion/styled';

export const Positioner = styled.div`
    width: 100%;
    height: 108px;
    display: flex;
    align-items: center;
    margin-bottom: 138px;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;
    padding: 0 5%;

    .filter {
        width: 95px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #82B897;
        box-sizing: border-box;
        border-radius: 5px;
        
        span {
            font-family: Fira Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
        }
        
        color: #82B897;
        cursor: pointer;
    }
`

export const Navigation = styled.div`
    width: 1106px;
    height: 30px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-left: 10%;
    span {
        color: #ABD995;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        padding: 2px 22px;
        border-radius: 5px;

        cursor: pointer;
        :hover {
            color: #ffffff;
            background-color: #ABD995;
        }
    }
`