import styled from "styled-components";

export const WrapperType = styled.div`
  padding: 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--primary-color);
    color: #E30019;
    border-radius: 4px;
  }
    @media (max-width: 1024px) {
      padding: 8px 8px; 
      font-size: 14px; 
  }
    @media (max-width: 768px) {
      padding: 6px 6px; 
      font-size: 13px; 
  }

  @media (max-width: 480px) {
    padding: 4px 4px; 
    font-size: 12px; 
    text-align: center; 
  }
`