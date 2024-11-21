import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
    font-size: 15px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: blue;
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: blue;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top:20px;
    flex-wrap: wrap;
`
export const AdBanner = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    text-align: center;
    width: 500px; /* Đặt chiều rộng của banner theo ý muốn */
    height: 500px; /* Đặt chiều cao của banner theo ý muốn */

    img {
        width: 100%;
        height: 100%;
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: red;
        color: while;
        border: none;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 100%;
    }
`;