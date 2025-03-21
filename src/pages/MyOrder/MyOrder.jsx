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
import { Modal } from 'antd';

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
    Modal.confirm({
      title: 'Xác nhận hủy đơn hàng',
      content: 'Bạn có chắc chắn muốn hủy đơn hàng này không?',
      okText: 'Xác nhận',
      cancelText: 'Hủy bỏ',
      maskClosable: true,
      onOk: () => {
        mutation.mutate(
          { id: order._id, token: state?.token, orderItems: order?.orderItems, userId: user.id },
          {
            onSuccess: () => {
              queryOrder.refetch();
            },
          }
        );
      },
    });
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
        <div style={{ width: '1270px', margin: '20px auto' }}>
          <h4 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#333'
          }}>
            Đơn hàng của tôi
          </h4>
          <WrapperListOrder>
            {data?.map((order) => (
              <WrapperItemOrder key={order?._id} style={{
                background: 'white',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '15px'
              }}>
                <WrapperStatus style={{ marginBottom: '10px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#555' }}>Trạng thái</span>
                  <div>
                    <span style={{ color: '#ff424e', fontSize: '14px' }}>Giao hàng: </span>
                    <span style={{ color: order.isDelivered ? 'green' : '#E30019', fontWeight: 'bold' }}>
                      {order.isDelivered ? 'Đã giao hàng' : 'Chưa giao hàng'}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: '#ff424e', fontSize: '14px' }}>Thanh toán: </span>
                    <span style={{ color: order.isPaid ? 'green' : '#E30019', fontWeight: 'bold' }}>
                      {order.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}
                    </span>
                  </div>
                </WrapperStatus>

                {renderProduct(order?.orderItems)}

                <WrapperFooterItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                  <div>
                    <span style={{ color: '#ff424e', fontSize: '14px' }}>Tổng tiền: </span>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{convertPrice(order?.totalPrice)}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <ButtonComponent
                      onClick={() => handleCancelOrder(order)}
                      size={40}
                      styleButton={{
                        height: '38px',
                        background: '#ff424e',
                        borderRadius: '5px',
                        padding: '0 15px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: '0.3s'
                      }}
                      textbutton={'Hủy đơn hàng'}
                      styletextbutton={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}
                    />
                    <ButtonComponent
                      onClick={() => handleDetailsOrder(order?._id)}
                      size={40}
                      styleButton={{
                        height: '38px',
                        background: '#007bff',
                        borderRadius: '5px',
                        padding: '0 15px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: '0.3s'
                      }}
                      textbutton={'Xem chi tiết'}
                      styletextbutton={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}
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
