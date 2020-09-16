import styled from '@emotion/styled';

export const Positioner = styled.div`
    height: 142px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #91B895;
    margin: 0 2%;

    .search {
        width: 600px;
        height: 45px;
        background-color: #E9E9E9;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-right: auto;
        }
    }

    .profile {
        display:flex;

        span {
            margin-left: 26px;
        }
    }

    span {
        width: 130px;
        height: 50px;
        
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: Fira Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        background: #82B897;
        border-radius: 5px;

        letter-spacing: 0.1em;

        color: #FFFFFF;
    }

`