import styled from "styled-components"

export const WrapperLableText = styled.h4`
    color: #333333;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`

export const WrapperTextValue = styled.span`
    color: #333333;
    font-size: 15px;
    font-weight: 400;
`

export const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;
    :hover{
        color: red;
    }
`

export const WrapperTextPrice = styled.div`
    padding: 4px;
    color: #333333;
    border-radius: 10px;
    backgroundColor: rgb(238, 238, 238);
    width: fit-cotent;
`