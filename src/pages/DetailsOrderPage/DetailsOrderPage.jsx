// import React, { useMemo } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { convertPrice } from '../../utils';
// import Loading from '../../components/LoadingComponent/Loading';
// import * as OrderService from '../../services/OrderService';
// import {
//   WrapperAllPrice,
//   WrapperContentInfo,
//   WrapperContentInfoProduct,
//   WrapperHeaderUser,
//   WrapperInfoUser,
//   WrapperItem,
//   WrapperItemLabel,
//   WrapperLabel,
//   WrapperNameProduct,
//   WrapperProduct,
//   WrapperStyleContent,
// } from './style';

// const DetailsOrderPage = () => {
//   const params = useParams();
//   const location = useLocation();
//   const { state } = location;
//   const { id } = params;

//   const fetchDetailsOrder = async () => {
//     if (!id || !state?.token) {
//       throw new Error('ID hoặc token không hợp lệ!');
//     }
//     const res = await OrderService.getDetailsOrder(id, state?.token);
//     return res.data;
//   };


//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ['orders-details', id],
//     queryFn: fetchDetailsOrder,
//     enabled: !!id,
//   });

//   const totalPrice = useMemo(() => {
//     return (
//       data?.orderItems?.reduce((total, item) => total + item.price * item.amount, 0) || 0
//     );
//   }, [data]);

//   if (isLoading) return <Loading isPending={isLoading} />;
//   if (isError) return <div>Error: {error.message}</div>;

//   return (
//     <div style={{ width: '100%', height: '100vh', background: '#f5f5fa' }}>
//       <div style={{ width: '1270px', margin: '0 auto' }}>
//         <h4>Chi tiết đơn hàng</h4>
//         <WrapperHeaderUser>
//           <WrapperInfoUser>
//             <WrapperLabel>Địa chỉ người nhận</WrapperLabel>
//             <WrapperContentInfo>
//               <div className="name-info">{data?.shippingAddress?.fullName}</div>
//               <div className="address-info">
//                 <span>Địa chỉ: </span>
//                 {`${data?.shippingAddress?.address}, ${data?.shippingAddress?.city}`}
//               </div>
//               <div className="phone-info">
//                 <span>Điện thoại: </span>
//                 {data?.shippingAddress?.phone}
//               </div>
//             </WrapperContentInfo>
//           </WrapperInfoUser>
//           <WrapperInfoUser>
//             <WrapperLabel>Hình thức giao hàng</WrapperLabel>
//             <WrapperContentInfo>
//               <div className="delivery-info">
//                 <span className="name-delivery">GHTK</span> - Giao hàng tiết kiệm
//               </div>
//               <div className="delivery-fee">
//                 <span>Phí giao hàng: </span>
//                 {convertPrice(data?.shippingPrice)}
//               </div>
//             </WrapperContentInfo>
//           </WrapperInfoUser>
//           <WrapperInfoUser>
//             <WrapperLabel>Phương thức thanh toán</WrapperLabel>
//             <WrapperContentInfo>
//               <div className="payment-info">{data?.paymentMethod || 'Không rõ'}</div>
//               <div className="status-payment">
//                 {data?.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}
//               </div>
//             </WrapperContentInfo>
//           </WrapperInfoUser>
//         </WrapperHeaderUser>

//         <WrapperContentInfoProduct style={{ marginTop: '10px' }}>
//           <WrapperStyleContent>
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <div style={{ width: '50%' }}>Sản phẩm</div>
//               <WrapperItemLabel>Giá</WrapperItemLabel>
//               <WrapperItemLabel>Số lượng</WrapperItemLabel>
//               <WrapperItemLabel>Giảm giá</WrapperItemLabel>
//             </div>
//             {data?.orderItems?.map((item) => (
//               <WrapperProduct key={item.id}>
//                 <WrapperNameProduct>
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     style={{
//                       width: '70px',
//                       height: '70px',
//                       objectFit: 'cover',
//                       border: '1px solid rgb(238, 238, 238)',
//                       padding: '2px',
//                     }}
//                   />
//                   <div
//                     style={{
//                       marginLeft: '10px',
//                       overflow: 'hidden',
//                       whiteSpace: 'nowrap',
//                       textOverflow: 'ellipsis',
//                       width: '60%',
//                     }}
//                   >
//                     {item.name}
//                   </div>
//                 </WrapperNameProduct>
//                 <WrapperItem>{convertPrice(item.price)}</WrapperItem>
//                 <WrapperItem>{item.amount}</WrapperItem>
//                 <WrapperItem>
//                   {item.discount
//                     ? convertPrice((item.price * item.amount * item.discount) / 100)
//                     : '0 VND'}
//                 </WrapperItem>
//               </WrapperProduct>
//             ))}
//             <WrapperAllPrice>
//               <WrapperItemLabel>Tạm tính</WrapperItemLabel>
//               <WrapperItem>{convertPrice(totalPrice)}</WrapperItem>
//             </WrapperAllPrice>
//             <WrapperAllPrice>
//               <WrapperItemLabel>Phí vận chuyển</WrapperItemLabel>
//               <WrapperItem>{convertPrice(data?.shippingPrice)}</WrapperItem>
//             </WrapperAllPrice>
//             <WrapperAllPrice>
//               <WrapperItemLabel>Tổng cộng</WrapperItemLabel>
//               <WrapperItem>{convertPrice(data?.totalPrice)}</WrapperItem>
//             </WrapperAllPrice>
//           </WrapperStyleContent>
//         </WrapperContentInfoProduct>
//       </div>
//     </div>
//   );
// };

// export default DetailsOrderPage;


import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, Col, Row, Table, Typography } from 'antd';
import { convertPrice } from '../../utils';
import Loading from '../../components/LoadingComponent/Loading';
import * as OrderService from '../../services/OrderService';

const { Title, Text } = Typography;

const DetailsOrderPage = () => {
  const params = useParams();
  const location = useLocation();
  const { state } = location;
  const { id } = params;

  const fetchDetailsOrder = async () => {
    if (!id || !state?.token) {
      throw new Error('ID hoặc token không hợp lệ!');
    }
    const res = await OrderService.getDetailsOrder(id, state?.token);
    return res.data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['orders-details', id],
    queryFn: fetchDetailsOrder,
    enabled: !!id,
  });

  const totalPrice = useMemo(() => {
    return (
      data?.orderItems?.reduce((total, item) => total + item.price * item.amount, 0) || 0
    );
  }, [data]);

  if (isLoading) return <Loading isPending={isLoading} />;
  if (isError) return <div>Error: {error.message}</div>;

  const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={record.image} alt={text} style={{ width: 50, height: 50, marginRight: 10 }} />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <Text strong>{convertPrice(price)}</Text>,
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Giảm giá',
      dataIndex: 'discount',
      key: 'discount',
      render: (discount, record) => (
        <Text strong>
          {discount ? convertPrice((record.price * record.amount * discount) / 100) : '0 VND'}
        </Text >
      ),
    },
  ];

  return (
    <div style={{ width: '100%', padding: '20px', background: '#f5f5fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={3}>Chi tiết đơn hàng</Title>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card title="Địa chỉ người nhận">
              <Text strong>{data?.shippingAddress?.fullName}</Text>
              <p>Địa chỉ: {data?.shippingAddress?.address}, {data?.shippingAddress?.city}</p>
              <p>Điện thoại: {data?.shippingAddress?.phone}</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Hình thức giao hàng">
              <Text strong>GHTK - Giao hàng tiết kiệm</Text>
              <p>Phí giao hàng: {convertPrice(data?.shippingPrice)}</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Phương thức thanh toán">
              <Text>{data?.paymentMethod || 'Không rõ'}</Text>
              <p style={{ color: data?.isPaid ? 'green' : 'red' }}>
                {data?.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}
              </p>
              <p>
                <Text strong>Thời gian đặt hàng: </Text>
                <Text style={{ color: '#007bff' }}>
                  {new Date(data?.createdAt || state?.orderTime).toLocaleString()}
                </Text>
              </p>
            </Card>

          </Col>
        </Row>
        <Card title="Danh sách sản phẩm" style={{ marginTop: '20px' }}>
          <Table dataSource={data?.orderItems} columns={columns} pagination={false} rowKey="id" />

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '10px', width: '1000px', textAlign: 'right' }}>
            <Text strong style={{ textAlign: 'left', paddingLeft: '700px' }}>Tạm tính:</Text>
            <Text type="danger" strong>{convertPrice(totalPrice).split(' ')[0]}</Text>
            <Text type="danger" strong>{convertPrice(totalPrice).split(' ')[1]}</Text>

            <Text strong style={{ textAlign: 'left', paddingLeft: '700px' }}>Phí vận chuyển:</Text>
            <Text type="danger" strong>{convertPrice(data?.shippingPrice).split(' ')[0]}</Text>
            <Text type="danger" strong>{convertPrice(data?.shippingPrice).split(' ')[1]}</Text>

            <Text strong style={{ textAlign: 'left', fontSize: '16px', paddingLeft: '700px' }}>Tổng cộng:</Text>
            <Text type="danger" strong style={{ fontSize: '16px' }}>{convertPrice(data?.totalPrice).split(' ')[0]}</Text>
            <Text type="danger" strong style={{ fontSize: '16px' }}>{convertPrice(data?.totalPrice).split(' ')[1]}</Text>
          </div>
        </Card>
      </div>
    </div >
  );
};

export default DetailsOrderPage;