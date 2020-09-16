import styled from '@emotion/styled'

export const Positioner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ThumNail = styled.div`
    min-width: 330px;
    min-height: 190px;
    background: #EAEC83;
    border-radius: 10px;
`

export const Footer = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;

    span {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
    }

    .view {
        display:flex;
        align-items: center;

        svg{
            margin-top: 2px;
        }
        span {
            font-family: Fira Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 18px;
            margin-left: 2px;

            color: #9EA2A1;
        }
    }
`