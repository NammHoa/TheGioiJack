import { Button, Popconfirm, Select, Space } from 'antd'
import React from 'react'
import { WrapperHeader } from './style'
import TableComponent from '../TableComponent/TableComponent'
import InputComponent from '../InputComponent/InputComponent'
import Loading from '../LoadingComponent/Loading'
import { convertPrice } from '../../utils'
import { updateOrderStatus } from '../../services/OrderService';


import * as OrderService from '../../services/OrderService'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { SearchOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { orderContant } from '../../contant'
import PieChartComponent from './PieChart'

const OrderAdmin = () => {
  const user = useSelector((state) => state?.user)


  const getAllOrder = async () => {
    const res = await OrderService.getAllOrder(user?.access_token)
    return res
  }



  const queryOrder = useQuery({ queryKey: ['orders'], queryFn: getAllOrder })
  const { isPending: isPendingOrders, data: orders } = queryOrder


  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <InputComponent
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button type="primary" icon={<SearchOutlined />} size="small" style={{ width: 90 }}>
            Search
          </Button>
          <Button size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
  });


  const columns = [
    { title: 'Tên người dùng', dataIndex: 'userName', sorter: (a, b) => a.userName.length - b.userName.length, ...getColumnSearchProps('userName') },
    { title: 'Số điện thoại', dataIndex: 'phone', sorter: (a, b) => a.phone.length - b.phone.length, ...getColumnSearchProps('phone') },
    { title: 'Địa chỉ', dataIndex: 'address', sorter: (a, b) => a.address.length - b.address.length, ...getColumnSearchProps('address') },
    { title: 'Thanh toán', dataIndex: 'isPaid', sorter: (a, b) => a.isPaid.length - b.isPaid.length, ...getColumnSearchProps('isPaid') },
    { title: 'Vận chuyển', dataIndex: 'isDelivered', sorter: (a, b) => a.isDelivered.length - b.isDelivered.length, ...getColumnSearchProps('isDelivered') },
    { title: 'Phương thức thanh toán', dataIndex: 'paymentMethod', sorter: (a, b) => a.paymentMethod.length - b.paymentMethod.length, ...getColumnSearchProps('paymentMethod') },
    { title: 'Tổng tiền', dataIndex: 'totalPrice', sorter: (a, b) => a.totalPrice.length - b.totalPrice.length, ...getColumnSearchProps('totalPrice') },
    { title: 'Thời gian đặt', dataIndex: 'createdAt', sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt) },

  ];

  const dataTable = orders?.data?.map((order) => ({
    ...order,
    key: order._id,
    userName: order?.shippingAddress?.fullName,
    phone: order?.shippingAddress?.phone,
    address: order?.shippingAddress?.address,
    paymentMethod: orderContant.payment[order?.paymentMethod],
    isPaid: order?.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán',
    isDelivered: order?.isDelivered ? 'Đã vận chuyển' : 'Chưa vận chuyển',
    totalPrice: convertPrice(order?.totalPrice),
    createdAt: new Date(order?.createdAt).toLocaleString(),
  }));



  return (
    <div>
      <WrapperHeader>Quản lý đơn hàng</WrapperHeader>
      <div style={{ height: "auto", width: 200 }}>
        <PieChartComponent data={orders?.data} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <TableComponent columns={columns} isPending={isPendingOrders} data={dataTable} />
      </div>
    </div>
  )
}

export default OrderAdmin
