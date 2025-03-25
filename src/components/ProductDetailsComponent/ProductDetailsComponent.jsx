import { Col, Image, Rate, Row } from 'antd'
import React, { useCallback, useRef } from 'react'
import { WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct, WrapperInputNumber, WrapperBtnQualityProduct, WrapperTextSell, WrapperPriceTextDiscount, CartNotification } from './style'
import { PlusOutlined, MinusOutlined, CheckCircleOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import * as ProductService from '../../services/ProductService'
import { useQuery } from '@tanstack/react-query'
import Loading from '../LoadingComponent/Loading'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addOrderProduct, resetOrder } from '../../redux/slides/orderSlide'
import { convertPrice, initFacebookSDK } from '../../utils'
import { useEffect } from 'react'
import * as message from '../Message/Message'
import LikeButtonComponent from '../LikeButtonComponent/LikeButtonComponent'
import CommentComponent from '../CommentComponent/CommentComponent'
import { useMemo } from 'react'

const ProductDetailsComponent = ({ idProduct }) => {
    const [numProduct, setNumProduct] = useState(1)
    const user = useSelector((state) => state.user)
    const order = useSelector((state) => state.order)
    const [errorLimitOrder, setErrorLimitOrder] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const cartIconRef = useRef(document.getElementById('cart-icon'))
    const imageRef = useRef(null)
    const [showNotification, setShowNotification] = useState(false);
    const [showMaxQuantityWarning, setShowMaxQuantityWarning] = useState(false);
    // const onChange = (value) => {
    //     setNumProduct(Number(value))
    // }
    const onChange = (value) => {
        if (value > 5) {
            setNumProduct(5);
        } else {
            setNumProduct(Number(value));
        }
    };

    const fetchGetDetailsProduct = async (context) => {
        const id = context?.queryKey && context?.queryKey[1]
        if (id) {
            const res = await ProductService.getDetailsProduct(id)
            return res.data
        }
    }

    useEffect(() => {
        initFacebookSDK()
    }, [])

    useEffect(() => {
        const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id)
        if ((orderRedux?.amount + numProduct) <= orderRedux?.countInstock || (!orderRedux && productDetails?.countInStock > 0)) {
            setErrorLimitOrder(false)
        } else if (productDetails?.countInStock === 0) {
            setErrorLimitOrder(true)
        }
    }, [numProduct])

    useEffect(() => {
        if (order.isSucessOrder) {
            message.success('Đã thêm vào giỏ hàng')
        }
        return () => {
            dispatch(resetOrder())
        }
    }, [order.isSucessOrder])




    // const handleChangeCount = (type) => {
    //     if (type === 'increase') {
    //         if (numProduct < 5 && numProduct < productDetails?.countInStock) {
    //             setNumProduct(numProduct + 1);
    //         }
    //     } else {
    //         if (numProduct > 1) {
    //             setNumProduct(numProduct - 1);
    //         }
    //     }
    // };


    const handleChangeCount = (type) => {
        if (type === 'increase') {
            if (numProduct < 5 && numProduct < productDetails?.countInStock) {
                const newNum = numProduct + 1;
                setNumProduct(newNum);
                if (newNum === 5) {
                    setShowMaxQuantityWarning(true);

                    // Ẩn thông báo sau 5 giây
                    setTimeout(() => {
                        setShowMaxQuantityWarning(false);
                    }, 5000);
                }
            }
        } else {
            if (numProduct > 1) {
                const newNum = numProduct - 1;
                setNumProduct(newNum);
            }
        }
    };

    const { isPending, data: productDetails } = useQuery({
        queryKey: ['product-details', idProduct],
        queryFn: fetchGetDetailsProduct,
        enabled: !!idProduct
    });

    const handleAddToCart = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };


    const handleAddOrderProduct = () => {
        if (!user?.id) {
            navigate('/sign-in', { state: location?.pathname });
        } else {
            const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id);
            const totalAmount = (orderRedux?.amount || 0) + numProduct;

            if (totalAmount > 5) {
                message.error('Sản phẩm chỉ mua tối đa số lượng 5, giỏ hàng của bạn đang có 5');
                return;
            }

            if (totalAmount <= productDetails?.countInStock) {
                dispatch(addOrderProduct({
                    orderItem: {
                        name: productDetails?.name,
                        amount: numProduct,
                        image: productDetails?.image,
                        price: productDetails?.price,
                        product: productDetails?._id,
                        discount: productDetails?.discount,
                        countInStock: productDetails?.countInStock,
                        selled: productDetails?.selled
                    }
                }));
                triggerAnimation();
                handleAddToCart();
            } else {
                setErrorLimitOrder(true);
            }
        }
    };

    const triggerAnimation = () => {
        if (!imageRef.current || !cartIconRef?.current) return;

        const imgClone = imageRef.current.cloneNode(true);
        document.body.appendChild(imgClone);

        const imgRect = imageRef.current.getBoundingClientRect();
        const cartRect = cartIconRef.current.getBoundingClientRect();

        imgClone.style.position = 'fixed';
        imgClone.style.left = `${imgRect.left}px`;
        imgClone.style.top = `${imgRect.top}px`;
        imgClone.style.width = `${imgRect.width}px`;
        imgClone.style.height = `${imgRect.height}px`;
        imgClone.style.zIndex = '1000';
        imgClone.style.borderRadius = '50%';
        imgClone.style.transition = 'all 0.8s ease-in-out';

        setTimeout(() => {
            imgClone.style.transform = `translate(${cartRect.left - imgRect.left}px, ${cartRect.top - imgRect.top}px) scale(0.1)`;
            imgClone.style.opacity = '0';
        }, 100);

        setTimeout(() => {
            imgClone.remove();
        }, 900);
    };

    return (
        <Loading isPending={isPending}>
            <Row id="product-detail-container" style={{ padding: 'auto', background: '#fff', borderRadius: '4px', height: 'auto' }}>
                <Col id="product-image-section" span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                    <Image id="product-image" src={productDetails?.image} alt="image product" preview={true} />
                </Col>

                <Col id="product-info-section" span={14} style={{ paddingLeft: '10px' }}>
                    <WrapperStyleNameProduct id="product-name">{productDetails?.name}</WrapperStyleNameProduct>
                    <div id="product-rating">
                        <Rate allowHalf defaultValue={productDetails?.rating} value={productDetails?.rating} />
                        <WrapperStyleTextSell id="product-selled"> | Đã bán {productDetails?.selled || 0}</WrapperStyleTextSell>
                    </div>

                    <WrapperPriceProduct id="product-price">
                        <WrapperPriceTextProduct>
                            {convertPrice(productDetails?.price)} |
                            <WrapperPriceTextDiscount id="product-discount"> - {productDetails?.discount} %</WrapperPriceTextDiscount>
                        </WrapperPriceTextProduct>
                    </WrapperPriceProduct>

                    <WrapperAddressProduct id="delivery-address">
                        <span>Giao đến </span>
                        <span id="user-address" className='address'>{user?.address}</span> -
                        <span id="change-address" className='change-address'>Đổi địa chỉ</span>
                    </WrapperAddressProduct>

                    <LikeButtonComponent
                        id="like-button"
                        dataHref={process.env.REACT_APP_IS_LOCAL ? "https://developers.facebook.com/docs/plugins/" : window.location.href}
                    />

                    <div id="product-quantity" style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                        <div id="quantity-label" style={{ marginBottom: '10px' }}>Số lượng</div>
                        <WrapperQualityProduct>
                            <button id="decrease-quantity" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease', numProduct === 1)}>
                                <MinusOutlined id='button-minus' style={{ color: '#000', fontSize: '20px' }} />
                            </button>

                            <WrapperInputNumber id="quantity-input" onChange={onChange} defaultValue={1} max={productDetails?.countInStock} min={1} value={numProduct} size="small" />

                            <button id="increase-quantity" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase')}>
                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>

                            {showMaxQuantityWarning && (
                                <div id="max-quantity-warning" style={{
                                    position: 'fixed',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: '#fff',
                                    padding: '16px',
                                    borderRadius: '8px',
                                    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                                    zIndex: 1000,
                                    width: '320px',
                                    textAlign: 'center'
                                }}>
                                    <p id='announ-products' style={{ fontSize: '16px', fontWeight: '500', lineHeight: '1.5' }}>
                                        Sản phẩm chỉ mua tối đa <strong>số lượng 5</strong>, giỏ hàng của bạn đang có <strong>{numProduct}</strong>
                                    </p>

                                    <button id="max-quantity-ok" onClick={() => setShowMaxQuantityWarning(false)} style={{
                                        display: 'block',
                                        width: '100%',
                                        padding: '10px 0',
                                        background: '#007bff',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        marginTop: '12px'
                                    }}>
                                        Đã hiểu
                                    </button>
                                </div>
                            )}
                        </WrapperQualityProduct>
                    </div>

                    <ButtonComponent
                        id="add-to-cart"
                        size={40}
                        styleButton={{ background: '#2d83d8', height: '50px', width: '400px', border: 'none', borderRadius: '4px' }}
                        onClick={handleAddOrderProduct}
                        textbutton={'Thêm sản phẩm vào giỏ hàng'}
                        styletextbutton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    />

                    <CartNotification id="cart-notification" className={showNotification ? "active" : ""}>
                        ✅ Đã thêm vào giỏ hàng
                        <br />
                        <button id="view-cart" style={{ borderRadius: '8px', width: '150px', alignItems: 'center', marginTop: '5px', border: '1px solid #bbddfd', color: '#2d83d8', backgroundColor: '#f1f8fe', cursor: 'pointer' }} onClick={() => window.location.href = "/order"}>Xem giỏ hàng</button>
                    </CartNotification>

                    {errorLimitOrder && <div id="out-of-stock" style={{ color: '#E30019' }}>Sản phẩm hết hàng</div>}

                    <WrapperTextSell id="product-warranty-info">
                        ✔ Bảo hành chính hãng 24 tháng.<br /><br />
                        ✔ Hỗ trợ đổi mới trong 7 ngày.<br /><br />
                        ✔ Windows bản quyền tích hợp.<br /><br />
                        ✔ Miễn phí giao hàng toàn quốc.<br /><br />
                    </WrapperTextSell>

                    <div id="product-promotions" style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '16px', marginTop: '10px' }}>
                        <h2 style={{ fontSize: '16px', fontWeight: '600' }}>Khuyến mãi:</h2>
                        <ul style={{ listStyleType: 'none', padding: 0, fontSize: '15px', fontWeight: '400' }}>
                            <li><CheckCircleOutlined style={{ color: 'green' }} /> Miễn phí vận chuyển cho đơn hàng trên 200.000 đ</li>
                            <li><CheckCircleOutlined style={{ color: 'green' }} /> Miễn phí cài đặt và vận chuyển</li>
                            <li><CheckCircleOutlined style={{ color: 'green' }} /> Giảm 10% cho đơn hàng đầu tiên</li>
                        </ul>
                    </div>
                </Col>
                <CommentComponent
                    dataHref={process.env.REACT_APP_IS_LOCAL
                        ? "https://developers.facebook.com/docs/plugins/comments#configurator"
                        : window.location.href
                    }
                    width="1270"
                    marginBottom='10px'
                />
                <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="" data-numposts="5"></div>

            </Row>
        </Loading>


    )
}

export default ProductDetailsComponent