import { Badge, Col, Popover } from 'antd'
import React, { useRef, useEffect, useState } from 'react'
import { SearchSuggestionImage, SearchSuggestionItem, SearchSuggestionName, SearchSuggestionPrice, SearchSuggestions, WrapperContentPopup, WrapperHeader, WrapperHeaderAccout, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButttonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/UserSlide'
import Loading from '../LoadingComponent/Loading';
import { searchProduct } from '../../redux/slides/ProductSlide';
import logo from '../../assets/images/logo.png'
import * as ProductService from '../../services/ProductService'
import { useQuery } from '@tanstack/react-query';
import { convertPrice } from '../../utils';

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [search, setSearch] = useState('')
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const order = useSelector((state) => state.order)
    const [pending, setPending] = useState(false)
    const searchRef = useRef(null);

    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    const handleLogout = async () => {
        setPending(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setPending(false)
    }

    useEffect(() => {
        setPending(true)
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setPending(false)
    }, [user?.name, user?.avatar])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearch('');
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchRef]);

    const content = (
        <div>
            <WrapperContentPopup onClick={() => handleClickNavigate('profile')}>Thông tin người dùng</WrapperContentPopup>
            {user?.isAdmin && (
                <WrapperContentPopup onClick={() => handleClickNavigate('admin')}>Quản lí hệ thống</WrapperContentPopup>
            )}
            <WrapperContentPopup onClick={() => handleClickNavigate(`my-order`)}>Đơn hàng của tôi</WrapperContentPopup>
            <WrapperContentPopup onClick={() => handleClickNavigate()}>Đăng xuất</WrapperContentPopup>
        </div>
    );

    const handleClickNavigate = (type) => {
        if (type === 'profile') {
            navigate('/profile-user')
        } else if (type === 'admin') {
            navigate('/system/admin')
        } else if (type === 'my-order') {
            navigate('/my-order', {
                state: {
                    id: user?.id,
                    token: user?.access_token
                }
            })
        } else {
            handleLogout()
        }
        setIsOpenPopup(false)
    }

    const onSearch = (e) => {
        setSearch(e.target.value)
        dispatch(searchProduct(e.target.value))
    }

    const fetchSearchResults = async (search) => {
        const res = await ProductService.getAllProduct(search, 10)
        return res
    }
    const { data: searchResults } = useQuery({
        queryKey: ['searchResults', search],
        queryFn: () => fetchSearchResults(search),
        enabled: !!search,
    })
    const handleSuggestionClick = (productId) => {
        navigate(`/product-details/${productId}`);
        setSearch('');
    };

    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', background: '#ffd400', justifyContent: 'center' }}>
            <WrapperHeader style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>
                <Col span={5}>
                    <WrapperTextHeader to={"/"}><span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}>TheGioiJack</span></WrapperTextHeader>
                </Col>
                {!isHiddenSearch && (
                    <Col span={13}>
                        <div style={{ position: 'relative' }} ref={searchRef}>
                            <ButttonInputSearch
                                size="large"
                                textbutton="Tìm kiếm"
                                placeholder="Bạn muốn tìm gì ? "
                                onChange={onSearch}
                            />
                            {search && searchResults?.data?.length > 0 && (
                                <SearchSuggestions>
                                    {searchResults.data.map((product) => (
                                        <SearchSuggestionItem key={product._id} onClick={() => handleSuggestionClick(product._id)}>
                                            <SearchSuggestionImage src={product.image} alt={product.name} />
                                            <SearchSuggestionName>{product.name}</SearchSuggestionName>
                                            <SearchSuggestionPrice>{convertPrice(product.price)}</SearchSuggestionPrice>
                                        </SearchSuggestionItem>
                                    ))}
                                </SearchSuggestions>
                            )}
                        </div>
                    </Col>
                )}
                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
                    <Loading isPending={pending}>
                        <WrapperHeaderAccout>
                            {userAvatar ? (
                                <img src={userAvatar} alt="avatar" style={{
                                    height: '30px',
                                    width: '30px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }} />
                            ) : (
                                <UserOutlined style={{ fontSize: '30px' }} />
                            )}
                            {user?.access_token ? (
                                <>
                                    <Popover content={content} trigger="click" open={isOpenPopup}>
                                        <div style={{ cursor: 'pointer', maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
                                    </Popover>
                                </>
                            ) : (
                                <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                                    <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                                    <div>
                                        <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                        <CaretDownOutlined />
                                    </div>
                                </div>
                            )}
                        </WrapperHeaderAccout>
                    </Loading>
                    {!isHiddenCart && (
                        <div onClick={() => navigate('/order')} style={{ cursor: 'pointer' }}>
                            <Badge count={order?.orderItems?.length} size="small">
                                <ShoppingCartOutlined style={{ fontSize: '30px' }} />
                            </Badge>
                            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                        </div>
                    )}
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent
