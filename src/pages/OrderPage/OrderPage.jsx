import { Checkbox, Form, Modal, Popconfirm } from 'antd'
import React, { useEffect, useState } from 'react'
import { CustomCheckbox, WrapperCountOrder, WrapperInfo, WrapperItemOrder, WrapperLeft, WrapperListOrder, WrapperRight, WrapperStyleHeader, WrapperStyleHeaderDilivery, WrapperTotal } from './style';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'

import { WrapperInputNumber } from '../../components/ProductDetailsComponent/style';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAmount, increaseAmount, removeAllOrderProduct, removeOrderProduct, selectedOrder } from '../../redux/slides/orderSlide';
import { convertPrice } from '../../utils';
import { useMemo } from 'react';
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import InputComponent from '../../components/InputComponent/InputComponent';
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as  UserService from '../../services/UserService'
import Loading from '../../components/LoadingComponent/Loading';
import * as message from '../../components/Message/Message'
import { updateUser } from '../../redux/slides/UserSlide';
import { useNavigate } from 'react-router-dom';
import StepComponent from '../../components/StepConponent/StepComponent';
import { Select } from "antd";

const OrderPage = () => {
    const order = useSelector((state) => state.order)
    const user = useSelector((state) => state.user)
    const [numProduct, setNumProduct] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [listChecked, setListChecked] = useState([])
    const [isOpenModalUpdateInfo, setIsOpenModalUpdateInfo] = useState(false)
    const [stateUserDetails, setStateUserDetails] = useState({
        name: '',
        phone: '',
        address: '',
        city: ''
    })
    const navigate = useNavigate()
    const [form] = Form.useForm();

    const dispatch = useDispatch()
    const onChange = (e) => {
        if (listChecked.includes(e.target.value)) {
            const newListChecked = listChecked.filter((item) => item !== e.target.value)
            setListChecked(newListChecked)
        } else {
            setListChecked([...listChecked, e.target.value])
        }
    };

    const handleChangeCount = (type, idProduct, currentAmount, countInStock) => {
        if (type === "increase" && currentAmount < 5 && currentAmount < countInStock) {
            dispatch(increaseAmount({ idProduct }));
        }
        if (type === "decrease" && currentAmount > 1) {
            dispatch(decreaseAmount({ idProduct }));
        }
    };





    const handleDeleteOrder = (idProduct) => {
        setIsModalOpen(false);
        Modal.confirm({
            title: 'Xác nhận xóa sản phẩm',
            content: 'Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?',
            okText: 'Xóa',
            cancelText: 'Hủy',
            maskClosable: true,
            onOk: () => {
                dispatch(removeOrderProduct({ idProduct }));
                message.success('Xóa thành công');
            },
        });
    };

    const handleOnchangeCheckAll = (e) => {
        if (e.target.checked) {
            const newListChecked = []
            order?.orderItems?.forEach((item) => {
                newListChecked.push(item?.product)
            })
            setListChecked(newListChecked)
        } else {
            setListChecked([])
        }
    }


    useEffect(() => {
        dispatch(selectedOrder({ listChecked }))
    }, [listChecked])

    useEffect(() => {
        form.setFieldsValue(stateUserDetails)
    }, [form, stateUserDetails])

    useEffect(() => {
        if (isOpenModalUpdateInfo) {
            setStateUserDetails({
                city: user?.city,
                name: user?.name,
                address: user?.address,
                phone: user?.phone
            })
        }
    }, [isOpenModalUpdateInfo])

    const handleChangeAddress = () => {
        setIsOpenModalUpdateInfo(true)
    }

    const priceMemo = useMemo(() => {
        const result = order?.orderItemsSlected?.reduce((total, cur) => {
            return total + ((cur.price * cur.amount))
        }, 0)
        return result
    }, [order])

    const priceDiscountMemo = useMemo(() => {
        const result = order?.orderItemsSlected?.reduce((total, cur) => {
            const discountAmount = cur.discount ? (cur.price * cur.amount * cur.discount / 100) : 0
            return total + discountAmount
        }, 0)
        if (Number(result)) {
            return result
        }
        return 0
    }, [order])

    const diliveryPriceMemo = useMemo(() => {
        if (priceMemo >= 200000 && priceMemo < 500000) {
            return 10000
        } else if (priceMemo >= 500000 || order?.orderItemsSlected?.length === 0) {
            return 0
        } else {
            return 20000
        }
    }, [priceMemo])

    const totalPriceMemo = useMemo(() => {
        return Number(priceMemo) - Number(priceDiscountMemo) + Number(diliveryPriceMemo)
    }, [priceMemo, priceDiscountMemo, diliveryPriceMemo])


    const handleRemoveAllOrder = () => {
        if (listChecked?.length > 0) {
            Modal.confirm({
                title: "Xác nhận xóa",
                content: `Bạn có chắc chắn muốn xóa ${listChecked.length} sản phẩm khỏi giỏ hàng không?`,
                okText: "Xóa",
                cancelText: "Hủy",
                okType: "danger",
                onOk() {
                    dispatch(removeAllOrderProduct({ listChecked }));
                    message.success("Xóa sản phẩm thành công!");
                }
            });
        }
    };

    const handleAddCard = () => {
        if (!order?.orderItemsSlected?.length) {
            message.error('Vui lòng chọn sản phẩm')
        } else if (!user?.phone || !user.address || !user.name || !user.city) {
            setIsOpenModalUpdateInfo(true)
        } else {
            navigate('/payment')
        }
    }

    const mutationUpdate = useMutationHooks(
        (data) => {
            const { id,
                token,
                ...rests } = data
            const res = UserService.updateUser(
                id,
                { ...rests }, token)
            return res
        },
    )

    const { isPending, data } = mutationUpdate

    const handleCancleUpdate = () => {
        setStateUserDetails({
            name: '',
            email: '',
            phone: '',
            isAdmin: false,
        })
        form.resetFields()
        setIsOpenModalUpdateInfo(false)
    }
    const handleUpdateInforUser = () => {
        const { name, address, city, phone } = stateUserDetails
        if (name && address && city && phone) {
            mutationUpdate.mutate({ id: user?.id, token: user?.access_token, ...stateUserDetails }, {
                onSuccess: () => {
                    dispatch(updateUser({ name, address, city, phone }))
                    setIsOpenModalUpdateInfo(false)
                    message.success("Cập nhật thành công!");

                }
            })
        }
    }

    const handleOnchangeDetails = (e) => {
        setStateUserDetails({
            ...stateUserDetails,
            [e.target.name]: e.target.value
        })
    }

    const showDeleteConfirm = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    const itemsDelivery = [
        {
            title: '20.000 VND',
            description: 'Dưới 200.000 VND',
        },
        {
            title: '10.000 VND',
            description: 'Từ 200.000 VND đến dưới 500.000 VND',
        },
        {
            title: 'Free ship',
            description: 'Trên 500.000 VND',
        },
    ]

    const provinces = [
        "Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ",
        "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu",
        "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước",
        "Bình Thuận", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Đắk Nông",
        "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang",
        "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hậu Giang", "Hòa Bình",
        "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu",
        "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định",
        "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên",
        "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị",
        "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên",
        "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang",
        "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
    ];


    return (
        <div style={{ background: '#f5f5fa', with: '100%', height: 'auto' }}>
            <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>Giỏ hàng</h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <WrapperLeft>
                        <h4 style={{ fontSize: '13px' }}>Phí giao hàng</h4>
                        <WrapperStyleHeaderDilivery>
                            <StepComponent items={itemsDelivery} current={diliveryPriceMemo === 10000
                                ? 2 : diliveryPriceMemo === 20000 ? 1
                                    : order.orderItemsSlected.length === 0 ? 0 : 3} />
                        </WrapperStyleHeaderDilivery>
                        <WrapperStyleHeader>
                            <span style={{ display: 'inline-block', width: '390px' }}>
                                <CustomCheckbox onChange={handleOnchangeCheckAll} checked={listChecked?.length === order?.orderItems?.length}></CustomCheckbox>
                                <span> Tất cả ({order?.orderItems?.length} sản phẩm)</span>
                            </span>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span>Đơn giá</span>
                                <span>Số lượng</span>
                                <span>Thành tiền</span>
                                <DeleteOutlined style={{ cursor: 'pointer' }} onClick={handleRemoveAllOrder} />
                            </div>
                        </WrapperStyleHeader>
                        <WrapperListOrder>
                            {order?.orderItems?.map((order) => {
                                return (
                                    <WrapperItemOrder key={order?.product}>
                                        <div style={{ width: '390px', display: 'flex', alignItems: 'center', gap: 4, fontSize: '13px' }}>
                                            <CustomCheckbox onChange={onChange} value={order?.product} checked={listChecked.includes(order?.product)}></CustomCheckbox>
                                            <img src={order?.image} style={{ width: '77px', height: '79px', objectFit: 'cover' }} />
                                            <div style={{
                                                width: 260,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>{order?.name}</div>
                                        </div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span>
                                                <span style={{ fontSize: '13px', color: '#242424' }}>{convertPrice(order?.price)}</span>
                                            </span>
                                            <WrapperCountOrder>

                                                <button
                                                    style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                                                >
                                                    {order?.amount > 1 ? (
                                                        <MinusOutlined
                                                            style={{ color: '#000', fontSize: '10px' }}
                                                            onClick={() => handleChangeCount('decrease', order?.product, order?.amount)}
                                                        />
                                                    ) : (
                                                        <MinusOutlined
                                                            style={{ color: '#000', fontSize: '10px', cursor: 'pointer' }}
                                                            onClick={() => handleDeleteOrder(order?.product)}
                                                        />
                                                    )}
                                                </button>
                                                <WrapperInputNumber value={order?.amount} size="small" min={1} max={5} />

                                                <button
                                                    style={{
                                                        border: 'none',
                                                        background: 'transparent',
                                                        cursor: order?.amount >= 5 || order?.amount >= order?.countInStock ? 'not-allowed' : 'pointer',
                                                        opacity: order?.amount >= 5 || order?.amount >= order?.countInStock ? 0.5 : 1,
                                                    }}
                                                    onClick={() => handleChangeCount('increase', order?.product, order?.amount, order?.countInStock)}
                                                    disabled={order?.amount >= 5 || order?.amount >= order?.countInStock}
                                                >
                                                    <PlusOutlined style={{ color: '#000', fontSize: '10px' }} />
                                                </button>


                                            </WrapperCountOrder>
                                            <span style={{ color: '#E30019', fontSize: '13px', fontWeight: 500 }}>{convertPrice(order?.price * order?.amount)}</span>
                                            <DeleteOutlined style={{ cursor: 'pointer', fontSize: '15px' }} onClick={() => handleDeleteOrder(order?.product)} />
                                        </div>
                                    </WrapperItemOrder>
                                )
                            })}
                        </WrapperListOrder>
                    </WrapperLeft>
                    <WrapperRight>
                        <div style={{ width: '100%' }}>
                            <WrapperInfo>
                                <div>
                                    <span>Địa chỉ: </span>
                                    <span style={{ fontWeight: 'bold' }}>{`${user?.address} ${user?.city} `} </span>
                                    <span onClick={handleChangeAddress} style={{ color: '#E30019', cursor: 'pointer' }}>Thay đổi</span>
                                </div>
                            </WrapperInfo>
                            <WrapperInfo>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span>Tạm tính</span>
                                    <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}>{convertPrice(priceMemo)}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span>Giảm giá</span>
                                    <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}>{convertPrice(priceDiscountMemo)}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span>Phí giao hàng</span>
                                    <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}>{convertPrice(diliveryPriceMemo)}</span>
                                </div>
                            </WrapperInfo>
                            <WrapperTotal>
                                <span>Tổng tiền</span>
                                <span style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ color: '#E30019', fontSize: '24px', fontWeight: 'bold' }}>{convertPrice(totalPriceMemo)}</span>
                                    <span style={{ color: '#000', fontSize: '11px' }}>(Đã bao gồm VAT nếu có)</span>
                                </span>
                            </WrapperTotal>
                        </div>
                        <ButtonComponent
                            onClick={() => handleAddCard()}
                            size={40}
                            styleButton={{
                                background: '#2d83d8',
                                height: '48px',
                                width: '320px',
                                border: 'none',
                                borderRadius: '4px'
                            }}
                            textbutton={'Mua hàng'}
                            styletextbutton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </WrapperRight>
                </div>
            </div>
            <ModalComponent title="Cập nhật thông tin giao hàng" open={isOpenModalUpdateInfo} onCancel={handleCancleUpdate} onOk={handleUpdateInforUser}>
                <Loading isPending={isPending}>
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        // onFinish={onUpdateUser}
                        autoComplete="on"
                        form={form}
                    >
                        <Form.Item
                            label="Tên: "
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập tên !' }]}
                        >
                            <InputComponent value={stateUserDetails['name']} onChange={handleOnchangeDetails} name="name" />
                        </Form.Item>
                        {/* <Form.Item
                            label="Thành phố: "
                            name="city"
                            rules={[{ required: true, message: 'Vui lòng nhập thành phố !' }]}
                        >
                            <InputComponent value={stateUserDetails['city']} onChange={handleOnchangeDetails} name="city" />
                        </Form.Item> */}
                        <Form.Item
                            label="Thành phố: "
                            name="city"
                            rules={[{ required: true, message: "Vui lòng nhập thành phố !" }]}
                        >
                            <Select
                                value={stateUserDetails.city}
                                onChange={(value) => handleOnchangeDetails({ target: { name: "city", value } })}
                                placeholder="Chọn tỉnh/thành phố"
                            >
                                {provinces.map((province) => (
                                    <Select.Option key={province} value={province}>
                                        {province}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>



                        <Form.Item
                            label="Số điện thoại: "
                            name="phone"
                            rules={[
                                { required: true, message: 'Vui lòng nhập số điện thoại !' },


                            ]}
                        >
                            <InputComponent value={stateUserDetails.phone} onChange={handleOnchangeDetails} name="phone" />
                        </Form.Item>

                        <Form.Item
                            label="Địa chỉ: "
                            name="address"
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ !' }]}
                        >
                            <InputComponent value={stateUserDetails.address} onChange={handleOnchangeDetails} name="address" />
                        </Form.Item>
                    </Form>
                </Loading>
            </ModalComponent>
        </div>
    )
}

export default OrderPage