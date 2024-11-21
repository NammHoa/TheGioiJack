import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 240px;
    & img {
        height: 240px;
        width: 240px;
    },
    position: relative;
    background-color: ${props => props.disabled ? '#ccc' : '#fff'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}
`

export const StyleNameProduct = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
`

export const WrapperReportText = styled.div`
    font-size: 12px;
    color: #333333;
    display: flex;
    align-items: center;
    margin-top: 10px;
`

export const WrapperPriceText = styled.div`
    color: #E30019;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
`

export const WrapperDiscountText = styled.span`
    color: #E30019;
    font-size: 14px;
    font-weight: 400;
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`