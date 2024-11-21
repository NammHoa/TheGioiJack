import React from 'react'
import { Lable, WrapperInfo, WrapperContainer, WrapperValue, WrapperItemOrder, WrapperItemOrderInfo } from './style';
import Loading from '../../components/LoadingComponent/Loading';
import { useLocation } from 'react-router-dom';
import { orderContant } from '../../contant';
import { convertPrice } from '../../utils';

const OrderSucess = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div style={{ background: '#f5f5fa', width: '100%', height: '100vh' }}>
      <Loading isPending={false}>
        <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 600, textAlign: 'center' }}>Đơn hàng đặt thành công</h3>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WrapperContainer>
              <WrapperInfo>
                <div>
                  <Lable>Phương thức giao hàng</Lable>
                  <WrapperValue>
                    <span style={{ color: '#ea8500', fontWeight: 'bold' }}>{orderContant.delivery[state?.delivery]}</span> Giao hàng tiết kiệm
                  </WrapperValue>
                </div>
              </WrapperInfo>
              <WrapperInfo>
                <div>
                  <Lable>Phương thức thanh toán</Lable>
                  <WrapperValue>
                    {orderContant.payment[state?.payment]}
                  </WrapperValue>
                </div>
              </WrapperInfo>
              <WrapperItemOrderInfo style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {state?.orders?.map((order) => {
                  return (
                    <WrapperItemOrder key={order?.name} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1 }}>
                        <img src={order.image} alt={order.name} style={{ width: '77px', height: '79px', objectFit: 'cover' }} />
                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{order?.name}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '70px' }}>
                        <span style={{ fontSize: '13px', color: '#242424' }}>Giá tiền: {convertPrice(order?.price)}</span>
                        <span style={{ fontSize: '13px', color: '#242424' }}>Số lượng: {order?.amount}</span>
                      </div>
                    </WrapperItemOrder>
                  )
                })}
              </WrapperItemOrderInfo>
              <div>
                <span style={{ fontSize: '16px', color: 'red' }}>Tổng tiền: {convertPrice(state?.totalPriceMemo)}</span>
              </div>
            </WrapperContainer>
          </div>
        </div>
      </Loading>
    </div>
  )
}

export default OrderSucess;
