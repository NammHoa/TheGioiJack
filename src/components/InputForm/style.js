import { Input } from "antd";
import styled from "styled-components";

export const WrapperInputStyle = styled(Input)`
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    margin-bottom: 20px;
    &:focus {
        background-color: papayawhip;
    }
    `