import styled from "styled-components";

export const WrapperContainer = styled.div`
  background: #f5f5fa;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`
export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 20px;
`
export const WrapperInfo = styled.div`
  background: #f9f9f9;
  padding: 12px;
  border-radius: 8px;
  text-align: left;
`
export const Lable = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`
export const WrapperValue = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 4px;
  background: #eef4ff;
  padding: 8px;
  border-radius: 6px;
`
export const WrapperItemOrderInfo = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const WrapperItemOrder = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  background: #fdfdfd;
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover {
    background: #f1f8ff;
  }
`
export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`
export const ProductInfo = styled.div`
  flex: 1;
  text-align: left;
`
export const ProductName = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #333;
`
export const PriceQuantity = styled.div`
  font-size: 13px;
  color: #666;
  display: flex;
  justify-content: space-between;
`
export const WrapperTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 8px;
  gap: 30px
`
export const OrderTime = styled.div`
  font-size: 12px;
  font-weight: 500;
`
export const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`
export const TotalPrice = styled.span`
  font-size: 18px;
  color: red;
  font-weight: bold;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end; 
  padding: 14px;
`
export const BackButton = styled.a`
  background: #ddd;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    background: #ccc;
  }
`