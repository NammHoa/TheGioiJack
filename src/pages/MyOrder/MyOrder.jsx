import React, { useEffect } from 'react';
import Loading from '../../components/LoadingComponent/Loading';
import { useQuery } from '@tanstack/react-query';
import * as OrderService from '../../services/OrderService';
import { useSelector } from 'react-redux';
import { convertPrice } from '../../utils';
import {
  WrapperItemOrder,
  WrapperListOrder,
  WrapperHeaderItem,
  WrapperFooterItem,
  WrapperContainer,
  WrapperStatus
} from './style';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as message from '../../components/Message/Message';

const MyOrderPage = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const fetchMyOrder = async () => {
    const res = await OrderService.getOrderByUserId(state?.id, state?.token);
    return res.data;
  };

  const user = useSelector((state) => state.user);

  const queryOrder = useQuery({
    queryKey: ['orders'],
    queryFn: fetchMyOrder,
    enabled: !!state?.id && !!state?.token
  });

  const { isPending, data } = queryOrder;

  const handleDetailsOrder = (id) => {
    navigate(`/details-order/${id}`, {
      state: {
        token: state?.token,
      },
    });
  };

  const mutation = useMutationHooks(
    (data) => {
      const { id, token, orderItems, userId } = data;
      return OrderService.cancelOrder(id, token, orderItems, userId);
    }
  );

  const handleCancelOrder = (order) => {
    mutation.mutate(
      { id: order._id, token: state?.token, orderItems: order?.orderItems, userId: user.id },
      {
        onSuccess: () => {
          queryOrder.refetch();
        },
      }
    );
  };

  const { isPending: isPendingCancel, isSuccess: isSuccessCancel, isError: isErrorCancel, data: dataCancel } = mutation;

  useEffect(() => {
    if (isSuccessCancel && dataCancel?.status === 'OK') {
      message.success();
    } else if (isSuccessCancel && dataCancel?.status === 'ERR') {
      message.error(dataCancel?.message);
    } else if (isErrorCancel) {
      message.error();
    }
  }, [isErrorCancel, isSuccessCancel, dataCancel]);

  const renderProduct = (orderItems) => {
    return orderItems?.map((item) => (
      <WrapperHeaderItem key={item?._id}>
        <img src={item?.image}
          style={{
            width: '70px',
            height: '70px',
            objectFit: 'cover',
            border: '1px solid rgb(238, 238, 238)',
            padding: '2px'
          }}
        />
        <div style={{
          width: 260,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          marginLeft: '10px',
          fontSize: '13px'
        }}>{item?.name}</div>
        <span style={{ fontSize: '13px', color: '#242424', marginLeft: 'auto' }}>{convertPrice(item?.price)}</span>
      </WrapperHeaderItem>
    ));
  };

  return (
    <Loading isPending={isPending || isPendingCancel}>
      <WrapperContainer>
        <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
          <h4 style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>Đơn hàng của tôi</h4>
          <WrapperListOrder>
            {data?.map((order) => (
              <WrapperItemOrder key={order?._id}>
                <WrapperStatus>
                  <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Trạng thái</span>
                  <div>
                    <span style={{ color: 'rgb(255, 66, 78)', fontSize: '13px' }}>Giao hàng: </span>
                    <span style={{ color: '#E30019', fontWeight: 'bold', fontSize: '13px' }}>{order.isDelivered ? 'Đã giao hàng' : 'Chưa giao hàng'}</span>
                  </div>
                  <div>
                    <span style={{ color: 'rgb(255, 66, 78)', fontSize: '13px' }}>Thanh toán: </span>
                    <span style={{ color: '#E30019', fontWeight: 'bold', fontSize: '13px' }}>{order.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}</span>
                  </div>
                </WrapperStatus>
                {renderProduct(order?.orderItems)}
                <WrapperFooterItem>
                  <div>
                    <span style={{ color: 'rgb(255, 66, 78)', fontSize: '13px' }}>Tổng tiền: </span>
                    <span style={{ fontSize: '13px', color: 'rgb(56, 56, 61)', fontWeight: 700 }}>{convertPrice(order?.totalPrice)}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <ButtonComponent
                      onClick={() => handleCancelOrder(order)}
                      size={40}
                      styleButton={{
                        height: '36px',
                        border: '1px solid #E30019',
                        borderRadius: '4px'
                      }}
                      textbutton={'Hủy đơn hàng'}
                      styletextbutton={{ color: '#E30019', fontSize: '14px' }}
                    />
                    <ButtonComponent
                      onClick={() => handleDetailsOrder(order?._id)}
                      size={40}
                      styleButton={{
                        height: '36px',
                        border: '1px solid #E30019',
                        borderRadius: '4px'
                      }}
                      textbutton={'Xem chi tiết'}
                      styletextbutton={{ color: '#E30019', fontSize: '14px' }}
                    />
                  </div>
                </WrapperFooterItem>
              </WrapperItemOrder>
            ))}
          </WrapperListOrder>
        </div>
      </WrapperContainer>
    </Loading>
  );
};

export default MyOrderPage;
