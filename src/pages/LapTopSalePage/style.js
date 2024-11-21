import styled from 'styled-components';
import { Col } from 'antd';

export const WrapperNavbar = styled(Col)`
  background: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const WrapperProducts = styled.div`
    display: flex;
    gap: 12px;
    margin-top:20px;
    flex-wrap: wrap;
`

export const ProductCard = styled.div`
 display: flex;
    gap: 10px;
    margin-top:20px;
    flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  display: block;
  margin: 0 auto;
`;
