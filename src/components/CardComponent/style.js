import { Card } from "antd";
import styled from "styled-components";

// export const WrapperCardStyle = styled(Card)`
//     width: 240px;
//     & img {
//         height: 240px;
//         width: 240px;
//     },
//     position: relative;
//     background-color: ${props => props.disabled ? '#ccc' : '#fff'};
//     cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}
// `
export const WrapperCardStyle = styled(Card)`
    flex: 1 1 calc(25% - 16px); /* Mỗi card chiếm 25% chiều rộng trừ khoảng cách */
    max-width: 240px; /* Giới hạn kích thước tối đa */
    position: relative;
    background-color: ${props => (props.disabled ? "#ccc" : "#fff")};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    transition: all 0.3s ease-in-out;

    & img {
        height: 240px;
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        flex: 1 1 calc(33.33% - 16px); /* Mỗi card chiếm 1/3 chiều rộng */
    }

    @media (max-width: 768px) {
        flex: 1 1 calc(50% - 12px); /* Mỗi card chiếm 1/2 chiều rộng */
    }

    @media (max-width: 480px) {
        flex: 1 1 100%; /* Mỗi card chiếm toàn bộ chiều rộng */
    }
`;

export const StyleNameProduct = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    height: 48px; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical; 
        @media (max-width: 768px) {
        font-size: 12px; /* Giảm kích thước font trên màn hình nhỏ */
        line-height: 14px;
    }
`

export const WrapperReportText = styled.div`
    font-size: 12px;
    color: #333333;
    display: flex;
    align-items: center;
    margin-top: 10px;
    height: 24px; 

    @media (max-width: 768px) {
        font-size: 10px; 
}
`

export const WrapperPriceText = styled.div`
    color: #E30019;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    height: 32px; 
       
    @media (max-width: 768px) {
        font-size: 14px; /* Giảm kích thước font */
    }

`

export const WrapperDiscountText = styled.span`
    color: #E30019;
    font-size: 14px;
    font-weight: 400;
       @media (max-width: 768px) {
        font-size: 12px; /* Giảm kích thước font */
    }
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120)
        @media (max-width: 768px) {
        font-size: 13px; /* Giảm kích thước font */
    }
`