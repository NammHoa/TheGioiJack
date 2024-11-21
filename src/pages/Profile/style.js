import styled from "styled-components";
import { Upload } from "antd";

export const WrapperHeader = styled.h1`
    color: #000;
    font-size: 30px;
    margin: 10px 0;
    text-align: center;
    margin-top: 10px;
    font-weight: 700;
`

export const WrapperContentProfile = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    gap: 20px;
    margin-top: 30px;
    background: #fff;
    height: 350px;
  
`

export const WrapperLabel = styled.label`
    color: #000;
    font-size: 15px;
    margin-bottom: 20px;
    font-weight: 600;
    width: 60px;
    text-align: left;
`

export const WrapperInput = styled.div`
    display: flex;
    align-items: center;
    gap:20px;
    height: 10px;
    margin-top: 30px;
`
export const WrapperUploadFile = styled(Upload)`
    & .ant-upload.ant-upload-select.ant-upload-select-picture-card {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    & .ant-upload-list-item-container {
        display: none
    }
`
