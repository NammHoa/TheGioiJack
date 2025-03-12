import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
    height: 64px;
    width: 64px;
`

export const WrapperStyleColImage = styled(Col)`
    flex-basis: unset;
    display: flex;
`

export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 25px;
    font-weight: 600;
    line-height: 32px;
    word-break: break-word;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`

export const WrapperPriceProduct = styled.div`
    color: #30019;
    border-radius: 4px;
`

export const WrapperPriceTextProduct = styled.h1`
   font-size: 32px;
line-height: 40px;
font-weight: 500;
background: white;
color: #E30019;
margin-top: 20px;
`

export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsisl
    };
    span.change-address {
        color: rgb(11, 116, 229);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }
`

export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    width: 120px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        width: 40px;
        border-top: none;
        border-bottom: none;
        .ant-input-number-handler-wrap {
            display: none !important;
        }
    };
`
export const WrapperTextSell = styled.span`
display: flex;
margin-left: 20px;
margin-top: 30px;
font-size: 20px;
`
export const WrapperPriceTextDiscount = styled.h1`
font-size: 20px;
line-height: 40px;
font-weight: 500;
background: white;
color: #E30019;
margin-top: 20px;
display: inline-block;
`
export const CartNotification = styled.div`
  position: fixed;
  width: 200px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  right: -192px;
  bottom:68px;
  z-index: 99999;
  text-align: center;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  &.active {
    opacity: 1;
    right: 50px;
  }
`;