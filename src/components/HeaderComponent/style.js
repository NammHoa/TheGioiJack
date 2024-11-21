import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    background-color: var(--primary-color);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    padding: 10px 0;
`

export const WrapperTextHeader = styled(Link)`
    font-size: 18px;
  
    font-weight: bold;
    text-align: left;
    &:hover {
        font-size: 18px;
        
    }
`

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;
    max-width: 200px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;

    white-space: nowrap;
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: #E30019;
    }
`
export const SearchSuggestions = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    z-index: 1000;
    max-height: 300px;
    overflow-y: auto;
`;

export const SearchSuggestionItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;

export const SearchSuggestionImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
`;

export const SearchSuggestionName = styled.div`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const SearchSuggestionPrice = styled.div`
   margin-left: auto; /* Pushes the element to the right */
    color: red; /* Sets the text color to red */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
