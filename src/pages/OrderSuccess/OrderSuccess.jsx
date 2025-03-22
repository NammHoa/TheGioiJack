
import React from 'react'
import { Lable, WrapperInfo, WrapperContainer, OrderTime, Highlight, WrapperValue, WrapperItemOrder, WrapperItemOrderInfo, Content, Title, Image, ProductInfo, ProductName, PriceQuantity, WrapperTotal, TotalPrice, ButtonWrapper, BackButton, ViewOrderButton } from './style';
import Loading from '../../components/LoadingComponent/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import { orderContant } from '../../contant';
import { convertPrice } from '../../utils';

const OrderSucess = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  return (
    <WrapperContainer>
      <Loading isPending={false}>
        <Content>
          <Title> Đặt hàng thành công!</Title>
          <WrapperInfo>
            <Lable>🚚 Phương thức giao hàng</Lable>
            <WrapperValue>{orderContant.delivery[state?.delivery]} - Giao hàng tiết kiệm</WrapperValue>
          </WrapperInfo>

          <WrapperInfo>
            <Lable>💳 Phương thức thanh toán</Lable>
            <WrapperValue>{orderContant.payment[state?.payment]}</WrapperValue>
          </WrapperInfo>

          <WrapperItemOrderInfo>
            {state?.orders?.map((order) => (
              <WrapperItemOrder key={order?.name}>
                <Image src={order.image} alt={order.name} />
                <ProductInfo>
                  <ProductName>{order?.name}</ProductName>
                  <PriceQuantity>
                    <span>💰 Giá: {convertPrice(order?.price)}</span>
                    <span>📦 Số lượng: {order?.amount}</span>
                  </PriceQuantity>
                </ProductInfo>
              </WrapperItemOrder>
            ))}
            <WrapperTotal>
              <OrderTime>🕒 Thời gian đặt hàng: <Highlight>{state?.orderTime}</Highlight></OrderTime>
              <TotalPrice>   Tổng tiền: {convertPrice(state?.totalPriceMemo)}</TotalPrice>
            </WrapperTotal>
          </WrapperItemOrderInfo>

          <ButtonWrapper>
            <BackButton href="/">Quay về trang chủ</BackButton>

          </ButtonWrapper>
        </Content>
      </Loading>
    </WrapperContainer>
  )
}

export default OrderSucess